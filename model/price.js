const mongoose = require('mongoose');

// price schema will store the price of 1ETH in INR
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