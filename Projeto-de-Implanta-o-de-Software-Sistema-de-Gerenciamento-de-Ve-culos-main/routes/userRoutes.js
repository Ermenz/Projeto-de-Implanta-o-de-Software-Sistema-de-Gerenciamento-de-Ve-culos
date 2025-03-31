const express = require('express');
const router = express.Router();
const { cadastrarUsuario } = require('../models/user');
const db = require('../database');

router.post('/cadastro', (req, res) => {
    const { username, email, password, confirm_password } = req.body;

    if (password != confirm_password) {
        res.send('As senhas não coincidem');
        return;
    }

    cadastrarUsuario(username, email, password, (err, id) => {
        if (err) {
            return res.status(500).send('Erro ao tentar cadastrar o usuário');
        }
        res.status(200).send(`Usuário cadastrado com sucesso!`);
    });
    // res.redirect("http://localhost:3000/garagem");
});




router.get('/consulta', (req, res) => {
    const sql = 'SELECT * FROM usuario';  // Altere para o nome da sua tabela

    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Erro ao consultar o banco de dados', err);
            return res.status(500).json({ erro: 'Erro ao consultar o banco de dados' });
        }

        res.status(200).json(rows);  // Retorna os dados da consulta
    });
});

module.exports = router;