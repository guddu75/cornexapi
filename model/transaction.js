const mongoose = require('mongoose');


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

const TransactionSchema = new mongoose.Schema({
	addressId : {
		type : String,
		required : [true , 'Please provide a addressId']
	},
	transactions : [SingleTransactionSchema]

});

module.exports = mongoose.model('Transaction' , TransactionSchema);