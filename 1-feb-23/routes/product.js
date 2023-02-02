const express = require('express');
//const path = require('path');
const router = express.Router();

const productColtroller = require('../controllers/product')


router.get('/products', productColtroller.getProduct);

router.get('/add-product', productColtroller.getAddProduct);

router.post('/add-product', productColtroller.postAddProduct)


router.use('/product', (req, res, next) => {
  res.redirect('/');
});

router.use('/', (req, res, next) => {
    res.send('home page');
})


exports.router = router;
// exports.products = products;