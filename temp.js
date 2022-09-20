const cron = require('node-cron');

const priceAPI = require('./utils/priceAPI');

cron.schedule('* * * * *', async () => {
  console.log('fetching price every minute');
  const price = await priceAPI();
  // console.log(price);
  process.env.ETH_INR = price.ethereum.inr;
  console.log(process.env.ETH_INR);
  
});
