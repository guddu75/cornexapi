

const axios = require('axios');


const getTransactions = async (addressId) =>{
	const instance = axios.create({
		baseURL : 'https://api.etherscan.io/api',
		params : {
        	module : 'account',
        	action : 'txlist',
        	address : addressId,
        	startblock : 0,
        	endblock: 99999999,
        	page : 1,
        	offset : 10000,
        	sort : 'asc',
        	apikey : process.env.API_KEY
    	}
	});
	const response = await instance.get();

	const data = response.data;

	let transactions = [];

	data.result.forEach( (tr) => {
		const obj = {
			from : tr.from,
			to : tr.to,
			value : tr.value
		};
		transactions.push(obj);
	} )

	const transactionData =  {
		addressId : addressId,
		transactions
	};

	
	
	return transactionData;
}

module.exports = getTransactions;

