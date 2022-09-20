module.exports =  (transactions,userId) =>{
	let balance = 0;
	transactions.forEach((transaction) =>{
		if(transaction.from === userId){
			balance = balance - (parseInt(transaction.value)/1000000000000000000);
		}else if(transaction.to === userId){
			balance = balance + (parseInt(transaction.value)/1000000000000000000);
		}
	});
	return balance;
}