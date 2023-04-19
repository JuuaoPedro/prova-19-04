const con = require("../dao/connect");

const criar = (req, res) => {
    const {nome, matricula} = req.body;
    const query = `INSERT INTO vendedores VALUES (DEFAULT, ${nome}, ${matricula})`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json(err).end();
        }else {            
            res.status(200).json(result).end();
        }
    });
};

const listar = (req, res) => {
    const query = `SELECT * FROM vendedores`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({error: "Erro ao listar vendedores"
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
                {error: "Erro ao alterar vendedor"}).end();
        }else {

            data.id = result.insertId;

            res.status(200).json(
                {message: "vendedor alterado com sucesso"}).end();
        }
    });
}

const excluir = (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM vendedores WHERE id = ${id}`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({error: "Erro ao alterar vendedor"
            }).end();
        }else {
            res.status(200).json({message: "vendedor removido com sucesso"
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