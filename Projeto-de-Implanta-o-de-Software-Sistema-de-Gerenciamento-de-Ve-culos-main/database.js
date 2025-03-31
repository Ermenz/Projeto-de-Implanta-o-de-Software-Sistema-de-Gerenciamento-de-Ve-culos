const { Database } = require('sqlite3');
const sqlite3 = require('sqlite3').verbose();
const dt = require('./server.js');

const db = new sqlite3.Database("./dbCarros", (err) => {

  if (err) {
    console.log("Deu erro!", err.message);
  }
  else {
    console.log("Funcionou normal!");

  }

})

// criando as tabelas

db.run(`

    create table if not exists  carros(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    placa VARCHAR(7) UNIQUE NOT NULL,
    modelo VARCHAR(30) NOT NULL,
    ano YEAR NOT NULL,
    marca VARCHAR(40)
    );`
);

db.run(
  `CREATE TABLE IF NOT EXISTS USUARIO(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME VARCHAR(60) NOT NULL, 
    EMAIL VARCHAR(60) NOT NULL,
    SENHA VARCHAR(60) NOT NULL
    );`, (err) => {

  if (err) {
    console.log("Deu erro ao tentar criar a tabela", err.message);

  } else {
    console.log("Tudo certo");
  }

});

 


module.exports = db;