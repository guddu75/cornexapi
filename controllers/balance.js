
const getTransactions = require('../utils/transactionAPI');
const getPrice = require('../utils/priceAPI'); 
const calculateBalance = require('../utils/calculateBalance');
const Price = require('../model/price');

exports.getBalance = async(req,res,next) =>{
	const userId = req.params.userId;
	const price = await Price.findOne();
	const inrValue = price.inrValue;
	const transactionData = await getTransactions(userId);

	// console.log(transactionData);

	// console.log(inrValue);

	const transactions = await transactionData.transactions;

	let balance = 0;
	transactions.forEach( (transaction) => {
		if(transaction.from.toLowerCase() === userId.toLowerCase()){
			balance = balance - (parseInt(transaction.value)/1000000000000000000);
		}else if(transaction.to.toLowerCase() === userId.toLowerCase()){
			balance = balance + (parseInt(transaction.value)/1000000000000000000);
		}
	});
	// balance = balance/(10^18);
	res.json({
		balance,
		INRValue : balance*inrValue
	});
}