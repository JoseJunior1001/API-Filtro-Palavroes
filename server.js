const express = require('express');
const app = express();
const port = 3000;
const palavras = require('./impropias.json');


app.get('/verificacao', (req, res) =>  {
    const valor = req.query.value; 

    const proibida = palavras.find(p => valor.includes(p));

    const simbolos = /[@!#$%&*]/;
    const tmsimbol = simbolos.test(valor);

    if (proibida || tmsimbol) {
        return res.send (`Palavra não permitida encontrada. Tente Novamente!`);
    }
    res.send ("Enviado com sucesso")
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);

})
