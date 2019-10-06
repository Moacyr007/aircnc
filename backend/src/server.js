const express = require('express');     //microframework pra ajudar com as rotas
const mongoose = require('mongoose'); 
const cors = require('cors'); 

const routes = require('./routes');     //Importando o arquivo com as rotas | Se n passar o caminho relativo (./) e deixar só routes vai procurar uma dependência chamada routes 
const app = express();

mongoose.connect('mongodb+srv://moacyr007:raiodechocolate@aircnc-o36kh.mongodb.net/AirCnCDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.use(cors()); //permite que qualquer aplicação acesse a api
app.use(express.json()); 
app.use(routes);

app.listen(3333);   //Porta em que a aplicação que ficará disponível em localhost:3333

