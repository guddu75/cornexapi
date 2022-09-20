const getTransactions = require('../utils/transactionAPI');
const Transaction = require('../model/transaction');



// @desc Get Normal transactions
// @route GET /api/v1/transaction?addressId=id
// @access Public
exports.getNormalTransactions = async (req,res,next) => {

	const addressId = req.query.addressId;
	try {
		// get all the transactions
    	const response = await getTransactions(addressId);
    	// store data in database if a transactions of a address is allready present
    	// it will update the document otherwise it will insert the document
		await Transaction.updateOne({addressId : addressId} , response , {upsert : true});
		// return the response
		const user = await Transaction.findOne({addressId : addressId});
    	res.json(user);
  	} catch (error) {
    	console.error(error);
  }
}; 
