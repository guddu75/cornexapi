
const getTransactions = require('../utils/transactionAPI');
const getPrice = require('../utils/priceAPI'); 
const Price = require('../model/price');

// @desc Get Balance  
// @route GET /api/v1/Balance?addressId=id
// @access Public

exports.getBalance = async(req,res,next) =>{
	const addressId = req.query.addressId;
	// get the current price of 1 ETH from database
	const price = await Price.findOne();
	const inrValue = price.inrValue;
	// fetch transactions of addressId
	const transactionData = await getTransactions(addressId);
	const transactions = await transactionData.transactions;
	// calculate the balance
	let balance = 0;
	transactions.forEach( (transaction) => {
		if(transaction.from.toLowerCase() === addressId.toLowerCase()){
			balance = balance + (parseInt(transaction.value)/1000000000000000000);
		}else if(transaction.to.toLowerCase() === addressId.toLowerCase()){
			balance = balance - (parseInt(transaction.value)/1000000000000000000);
		}
	});
	res.json({
		balance,
		INRValue : balance*inrValue
	});
}