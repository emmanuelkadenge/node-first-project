const path = require('path');

const express = require('express');

const myControllers = require('../controllers/products')

const router = express.Router();


router.get('/add-product',myControllers.getProductController);


router.post('/add-product',myControllers.postProductController);

module.exports = router;
