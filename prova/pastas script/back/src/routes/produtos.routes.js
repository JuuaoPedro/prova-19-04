const express = require('express');
const router = express.Router();

const Produtos = require('../controllers/produtos.controllers');

router.post('/produtos', Produtos.criar);
router.get('/produtos', Produtos.listar);
router.get('/produtos/:id', Produtos.listar);
router.put('/produtos', Produtos.alterar);
router.delete('/produtos', Produtos.excluir);

module.exports = router;