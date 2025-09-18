const express = require("express");
const app = express(); 
const PORT = 3000;
//lista de palavras 
const desculpas = require(`./desculpas.json`); 
//rota principal 
app.get("/desculpa", (req, res) => { const qtd = parseInt(req.query.qtd) || 1; 
//Sorteio 
const sorteadas = [] ; for (let i = 0; i<qtd; i++) { 
const aleatoria = desculpas[Math.floor(Math.random() * desculpas.length)]; sorteadas.push(aleatoria) } 
res.json({ desculpas:sorteadas}); }); 
//iniciar servidor 
app.listen(PORT, () =>{ console.log(`API rodando em https://localhost:${PORT}`); 
});