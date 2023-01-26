const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./routes/product');
const login = require('./routes/login')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(productRouter);
app.use(login)

app.listen(3000);