const con = require("../dao/connect");

const criar = (req, res) => {
    const {quantidade, produtoid, vendedorid} = req.body;
    const query = `INSERT INTO vendas VALUES (DEFAULT, ${quantidade}, ${produtoid}, ${vendedorid}`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json(err).end();
        }else {            
            res.status(200).json(result).end();
        }
    });
};

const listar = (req, res) => {
    const query = `SELECT * FROM vendas`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({error: "Erro ao listar vendas"
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

    const query = `UPDATE vendas SET data = '${valor_vendas}' WHERE id = '${id}'`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json(
                {error: "Erro ao alterar vendas"}).end();
        }else {

            data.id = result.insertId;

            res.status(200).json(
                {message: "venda alterada com sucesso"}).end();
        }
    });
}

const excluir = (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM vendas WHERE id = ${id}`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({error: "Erro ao alterar venda"
            }).end();
        }else {
            res.status(200).json({message: "venda removida com sucesso"
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