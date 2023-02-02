const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./routes/product').router;
const products = require('./routes/product').products;
const login = require('./routes/login');
const path = require('path');

const app = express();

app.set('view engine', 'ejs')

// app.use((req, res, next) => {
//     req.products = products;
//     next();
// })
// app.use('/test', (req, res, next)=>{
//     res.send(products)
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')))
app.use(login);
app.use(productRouter);

app.listen(3000);