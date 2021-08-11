const path = require('path');

const express = require('express');

const myController = require('../controllers/products')
const adminData = require('./admin');

const router = express.Router();

router.get('/', myController.viewProductsController)


module.exports = router;
