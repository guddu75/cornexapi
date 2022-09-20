const getTransactions = require('../utils/transactionAPI');
const Transaction = require('../model/transaction');



// @desc Get Normal transactions
// @route GET /api/v1/transaction/:userID
// @access Public
exports.getNormalTransactions = async (req,res,next) => {

	const userId = req.params.userId;
	try {
    	const response = await getTransactions(userId);
		await Transaction.updateOne({addressId : userId} , response , {upsert : true});
		const user = await Transaction.findOne({addressId : userId});
    	res.json(user);
  	} catch (error) {
    	console.error(error);
  }
}; 
