const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
     date: String,
     approved: Boolean,
     user: {
        type: mongoose.Schema.Types.ObjectId, //Tipo id de objeto
        ref: 'User'                             //referencia para qual model é a informação
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Spot'                           
    }
});

module.exports = mongoose.model('Booking', BookingSchema);