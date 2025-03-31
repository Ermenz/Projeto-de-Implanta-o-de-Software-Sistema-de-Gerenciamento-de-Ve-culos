const express = require('express');
const path = require("path");
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/usuarios', userRoutes);



const port = "3000";

app.use(express.static(path.join(__dirname, 'view', 'public')));
app.use(express.urlencoded({ extended: true }));

//rotas GET

app.get('/garagem', (req, res)=>{
    res.sendFile(path.join(__dirname, 'pages', 'index_Aplication.html'));
})

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'view', 'pages', 'index_login.html'));
});




app.get('/cadastro', (req, res)=>{
    res.sendFile(path.join(__dirname, 'view', 'pages', 'index_cadastrar.html'));
});

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
})