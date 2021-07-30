const path = require('path');
const express = require('express');

const adminRouter = require('./router/admin');
const shopRouter = require('./router/shop');
const app = express();
const rootDir = require('./utils/path')

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}));

app.use(adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})

app.listen(3000)