const express = require('express');
const router = express.Router();

const Vendas = require('../controllers/produtos.controllers');

router.post('/vendas', Vendas.criar);
router.get('/vendas', Vendas.listar);
router.get('/vendas/:id', Vendas.listar);
router.put('/vendas', Vendas.alterar);
router.delete('/vendas', Vendas.excluir);

module.exports = router;