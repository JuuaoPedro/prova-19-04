const express = require('express');
const cors = require('cors');

const produtosRoutes = require("./src/routes/produtos.routes");
const vendasRoutes = require("./src/routes/vendas.routes");
const vendedoresRoutes = require("./src/routes/vendedores.routes");

const app= express();

app.use(cors());
app.use(express.json());

app.use(produtosRoutes);
app.use(vendasRoutes);
app.use(vendedoresRoutes);

app.listen(3000, () => {
    console.log("rodando na porta 3000");
});