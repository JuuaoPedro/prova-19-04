const con = require("../dao/connect");

const criar = (req, res) => {
    const {nome, valor} = req.body;
    const query = `INSERT INTO produtos VALUES (DEFAULT, '${nome}', ${valor})`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json(err).end();
        }else {            
            res.status(200).json(result).end();
        }
    });
};

const listar = (req, res) => {
    const query = `SELECT * FROM produtos`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({error: "Erro ao listar produto"
            }).end();
        }else {
            data.id = result.insertId;

            res.status(200).json(result).end();
        }
    });
}

const alterar = (req, res) => {
    const { data } = req.body;

    const { id } = req.params;

    const query = `UPDATE produtos SET data = '${data}' WHERE id = '${id}'`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json(
                {error: "Erro ao alterar produto"}).end();
        }else {

            data.id = result.insertId;

            res.status(200).json(
                {message: "produto alterado com sucesso"}).end();
        }
    });
}

const excluir = (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM produtos WHERE id = ${id}`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({error: "Erro ao alterar produto"
            }).end();
        }else {
            res.status(200).json({message: "produto removido com sucesso"
            }).end();
        }
    });
}

module.exports = {
    criar,
    alterar,
    excluir,
    listar
}