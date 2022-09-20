const cron = require('node-cron');
const priceAPI = require('./priceAPI');
const Price = require('../model/price');


// get live exchange rate from ETH to INR
const liveExchange = async () => {
  const price = await priceAPI(); // get exchange rate for ETH to INR
  const prev = await Price.findOne(); // find the one document that allready present in the 


  // If there is allready a document present we don't insert new document we just update the document with new price
  let objId;
  if(prev){
  	objId = prev._id;
    const updatedPrice = await Price.findByIdAndUpdate(objId , price);
  }else{
  	const obj = await Price.create(price);
  	objId = obj._id;
  }
  // Fetches price every 10 minutes and updates the price in database 
  cron.schedule('*/10 * * * *', async () => {
	  	const price = await priceAPI();
	  	const updatedPrice = await Price.findByIdAndUpdate(objId , price);
	});
};

module.exports = liveExchange;