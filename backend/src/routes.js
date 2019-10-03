const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');

const routes = express.Router(); //Separando o roteador do express no objeto? routes, assim será possivel acessar os métodos do express.Router() a partir do routes.
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/dashboard', DashboardController.show);

module.exports = routes; //Exportando as rotas para a aplicação






















//Anotações para estudo

//Para o express aceitar requisições json
//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição e deletar)
//req.body = Acessar corpo da requisição


// GET(buscar), POST(criar), PUT(alterar), DELETE(deletar) metódos mais importantes para uma API Rest| parece que o navegador n consegue  executar o post sem um formulário
/*
app.get('/', (req, rest) => {                             //req = requisição ,pega os parametros que o usuário enviar | rest = função, devolve uma resposta para a requisição.
    return rest.json({ message: "Hello Word2"});           //envia um objeto com a propriedade message com valor Hello Word
}); //primeiro parametro rota
*/
/*
app.post('/users', (req, rest) => {                            
    return rest.json({ message: "Hello Word2"});           
}); //primeiro parametro rota
*/
/*
app.get('/users', (req, rest) => {                            
    return rest.json({ idade: req.query.idade});         
}); //primeiro parametro rota
*/
/*
app.put('/users/:id', (req, rest) => {                            
    return rest.json({ idade: req.params.id});         
}); //primeiro parametro rota
*/
