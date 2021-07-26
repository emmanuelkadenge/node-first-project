const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended : false}))

app.get('/add-product',(req, res, next) => {
    res.send('<form method="post" action="/product"><input type="text" name="Tittle"><button type="submit">Add Product</button></form>')
})
app.post('/product',(req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})
app.get('/',(req, res, next) => {
    res.send('<h1>This is the express Server !!!!!!!</h1>')
})

app.listen(3000)