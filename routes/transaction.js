const express = require('express');

const {getNormalTransactions} = require('../controllers/transaction');


const router = express.Router();

router.route('/')
	.get(getNormalTransactions);

module.exports = router;
