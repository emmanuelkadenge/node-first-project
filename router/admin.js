const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next) =>{
    res.send('<form method="post" action="/product"><input type="text" name="Tittle"><button type="submit">Add Product</button></form>')
})

router.post('/',(req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;