const getTransactions = require('../utils/transactionAPI');
const Transaction = require('../model/transaction');



// @desc Get Normal transactions
// @route GET /api/v1/transaction/:userID
// @access Public
exports.getNormalTransactions = async (req,res,next) => {

	const addressId = req.query.addressId;
	try {
    	const response = await getTransactions(addressId);
		await Transaction.updateOne({addressId : addressId} , response , {upsert : true});
		const user = await Transaction.findOne({addressId : addressId});
    	res.json(user);
  	} catch (error) {
    	console.error(error);
  }
}; 
