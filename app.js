const express = require('express');

const  adminRouter = require('./router/admin');
const shopRouter = require('./router/shop');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}))

app.use('/admin',adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not Found</h1>')
})

app.listen(3000)