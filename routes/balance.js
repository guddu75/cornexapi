const express = require('express');

const {getBalance} = require('../controllers/balance');


const router = express.Router();

router.route('/').get(getBalance);

module.exports = router;
