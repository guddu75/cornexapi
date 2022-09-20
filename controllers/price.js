
// const axios = require('axios').default;
const getPrice = require('../utils/priceAPI');
const Price = require('../model/price');


// @desc Get ehterium to inr 
// @route GET /api/v1/price
// @access Public
exports.getPrice = async (req,res,next) => {
	try {
		// get the price
    	const response = await getPrice();
    	// store data in database
    	const price = await Price.create(response);
    	// send response
    	res.json(price);
  	} catch (error) {
    	console.error(error);
  }
}; 
