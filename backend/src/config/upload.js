const multer = require('multer');
const path = require('path');

module.exports = {                                                      //exporta objeto com as configurações
    storate: multer.diskStorage({                                       //storage= como o multer vai salvar os aqiuquivos
        destination: path.resolve(__dirname, '..', '..', 'uploads'),    //path.resolve vai comverter o caminho com as barras pro lado serto dependendo do SO ..\..\uploads
                                                                        //__dirname é uma variavel global que informa o path do arquivo atual
        filename: (req, file, cb) =>{                                   //cb = callback
            cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);  //Configuração para formar o nome do arquivo nome do arquivo + timestamps atual + extensão original
        },                                                                   
    }),
}