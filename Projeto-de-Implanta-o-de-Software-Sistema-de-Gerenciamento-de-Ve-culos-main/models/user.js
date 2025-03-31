const db = require('../database');


function cadastrarUsuario(nome, email, senha, callback){

    const sql = 'INSERT INTO USUARIO (nome, email, senha) VALUES (?, ?, ?)';

    db.run(sql, [nome, email, senha], (err)=>{
        if (err) {
            console.log("Deu erro ao tentar inserir os dados", err.message);
            callback(err, null);
        } else {
            console.log("Tudo certo, novo Usuário cadastrado");
            callback(null, this.lastID);
        }
    });
}

module.exports = {
    cadastrarUsuario,
};