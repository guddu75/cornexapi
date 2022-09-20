const express = require('express');

const dotenv = require('dotenv');

const connectDB = require('./config/db');

dotenv.config({path : `config/config.env`});



const transaction = require('./routes/transaction');
const price = require('./routes/price');
const balance = require('./routes/balance');
const liveExchange = require('./utils/liveexchangeRate');


connectDB();

const app = express();

liveExchange();



app.use('/api/v1/transaction',transaction);
app.use('/api/v1/price',price);
app.use('/api/v1/balance',balance);

const PORT = process.env.PORT ||5000;

const server = app.listen(PORT , console.log(`Server running on port ${PORT}`));