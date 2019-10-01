const express = require('express'); //microframework pra ajudar com as rotas
const routes = require('./routes'); //Importando o arquivo com as rotas

const app = express();


app.use(express.json()); 


app.listen(3333);                                         //Porta em que a aplicação que ficará disponível em localhost:3333

