const express = require('express');
const router = express.Router();

const Vendedores = require('../controllers/produtos.controllers');

router.post('/vendedores', Vendedores.criar);
router.get('/vendedores', Vendedores.listar);
router.get('/vendedores/:id', Vendedores.listar);
router.put('/vendedores', Vendedores.alterar);
router.delete('/vendedores', Vendedores.excluir);

module.exports = router;