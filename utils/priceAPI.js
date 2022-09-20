
const axios = require('axios');


// Fetches the price of 1 ETH 
const getPrice = async () =>{
	const instance = axios.create({
		baseURL : 'https://api.coingecko.com/api/v3/simple/price',
		params : {
        	ids : 'ethereum',
        	vs_currencies : 'inr'
    	}
	});
	const response = await instance.get();

	const data = await response.data;

	const obj = await {
		inrValue : data.ethereum.inr
	}

	return obj;
}

module.exports = getPrice;