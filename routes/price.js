const express = require('express');

const {getPrice} = require('../controllers/price');


const router = express.Router();

router.route('/')
	.get(getPrice);

module.exports = router;
