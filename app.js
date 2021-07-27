const express = require('express');
const app = express();
const adminRouter = require('./router/admin');
const shopRouter = require('./router/shop');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}));
app.use(adminRouter);
app.use(shopRouter);

app.listen(3000);
