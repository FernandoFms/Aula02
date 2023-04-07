// Importação dos modulos:
const express = require("express");

// Cria as rotas do meu projeto:
const router = express.Router();

router.get('/', (req, res) => {
    res.status(404).send("Painga 404 - Não foi encontrado");
    res.send("Pagina Principal");
});


router.get('/aluno', (req, res) => { 
    res.send("Pagina do Aluno");
});

router.get('/professor', (req, res) => {
    res.send("Pagina do Professor");
});

//Configuração para exportação
const index = express();
index.use('/', router);

module.exports = index;        