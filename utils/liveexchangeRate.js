const cron = require('node-cron');
const priceAPI = require('./priceAPI');
const Price = require('../model/price');

const liveExchange = async () => {
  const price = await priceAPI();
  const prev = await Price.findOne();

  let objId;
  if(prev){
  	objId = prev._id;
  }else{
  	const obj = await Price.create(price);
  	objId = obj._id;
  }
  cron.schedule('*/10 * * * *', async () => {
	  	// console.log('fetching price every minute');
	  	const price = await priceAPI();
	  	const updatedPrice = await Price.findByIdAndUpdate(objId , price);
	  	// console.log(updatedPrice)
	});
};

module.exports = liveExchange;