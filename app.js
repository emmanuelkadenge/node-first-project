const path = require('path');
const express = require('express');

const  adminRouter = require('./router/admin');
const shopRouter = require('./router/shop');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin',adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','error page.html'))
})

app.listen(3000)