
// const axios = require('axios').default;
const getPrice = require('../utils/priceAPI');
const Price = require('../model/price');

// @desc Get ehterium to inr 
// @route GET /api/v1/price
// @access Public


exports.getPrice = async (req,res,next) => {
	try {
    	const response = await getPrice();
    	const price = await Price.create(response);
    	res.json(price);
  	} catch (error) {
    	console.error(error);
  }
}; 
