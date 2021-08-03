const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../utils/path')
const adminData = require('../routes/admin')

router.get('/',(req, res, next) => {
    console.log('from shop.js',adminData.products)
    res.sendFile(path.join(rootDir,'views','shop.html'))
})
module.exports = router;
