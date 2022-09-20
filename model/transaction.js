const mongoose = require('mongoose');

// SingleTransaction
// from = sender of ETH
// to = reciever of ETH
// value = the amount transferred
const SingleTransactionSchema = new mongoose.Schema({
	from : {
		type : String 
	},
	to : {
		type : String
	},
	value : {
		type : String
	}
});
// Every TransactionSchema will have adressId and an array of SingleTransactions 
const TransactionSchema = new mongoose.Schema({
	addressId : {
		type : String,
		required : [true , 'Please provide a addressId']
	},
	transactions : [SingleTransactionSchema]

});

module.exports = mongoose.model('Transaction' , TransactionSchema);