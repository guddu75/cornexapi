const mongoose = require('mongoose');


const priceSchema = new mongoose.Schema({
	inrValue : {
		type : Number,
	},
},
{
	timestamps: true
}
);


module.exports = mongoose.model('Price' , priceSchema);