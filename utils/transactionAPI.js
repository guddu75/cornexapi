

const axios = require('axios');

//  Fethces all the "Normal" transactions of a addressId
// Format the response because we only need "from" , "to" , "value" , "adressId" field for calculation
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

	// get the response from the data
	const response = await instance.get();

	const data = response.data;

	let transactions = [];

	// formatting the data
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

