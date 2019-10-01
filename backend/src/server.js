const express = require('express');

const app = express();

app.get('/', (req, rest) => {                             //req = requisição ,pega os parametros que o usuário enviar | rest = função, devolve uma resposta para a requisição.
    return rest.json({ message: "Hello Word"});           //envia um objeto com a propriedade message com valor Hello Word
}); //primeiro parametro rota

app.listen(3333);                                         //Porta em que a aplicação que ficará disponível em localhost:3333

