// métodos do controller: index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async store( req, res){
        
        const { email } = req.body;

        let user = await User.findOne({ email: email}); //verifica se o email já está cadastrado

        if (!user){
            user = await User.create({ email }); 
        }

        return res.json(user);
    }
};