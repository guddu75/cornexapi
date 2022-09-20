const express = require('express');

const {getNormalTransactions} = require('../controllers/transaction');


const router = express.Router();

router.route('/:userId')
	.get(getNormalTransactions);

module.exports = router;
