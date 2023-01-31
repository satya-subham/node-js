const express = require('express');
//const path = require('path');
const router = express.Router();
const products = []

router.get('/products', (req, res) => {
    // res.sendFile(path.join(__dirname, '..', '/views/products/product.html'));

    res.render('products/product', {
      products: products,
    })

});

router.get('/add-product', (req, res) => {
  // res.render(path.join(__dirname, '..', '/views/products/add-product.html'));

  res.render('products/add-product');

});

router.post('/add-product', (req, res) => {
  products.push(req.body.title);
  // console.log(products);
  // res.sendFile(path.join(__dirname, '..', '/views/products/add-product.html'));

  res.redirect('/products')
})


router.use('/product', (req, res, next) => {
  res.redirect('/');
});

router.use('/', (req, res, next) => {
    res.send('home page');
})


exports.router = router;
exports.products = products;