const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId, //Tipo id de objeto
        ref: 'User'                             //referencia para qual model é a informação
    }
});

module.exports = mongoose.model('Spot', SpotSchema);