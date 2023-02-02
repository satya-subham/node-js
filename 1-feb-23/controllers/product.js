const Product = require('../model/product');

exports.getProduct = (req, res) => {
    // res.sendFile(path.join(__dirname, '..', '/views/products/product.html'));

    res.render('products/product', {
      products: Product.fetchAll(),
      path: '/products'
    })

}

exports.getAddProduct = (req, res) => {
    // res.render(path.join(__dirname, '..', '/views/products/add-product.html'));
  
    res.render('products/add-product', {
      path: '/add-product'
    });
    
}

exports.postAddProduct =  (req, res) => {
    let p = new Product(req.body.title);
    p.save();
    //products.push(req.body.title);
    // console.log(products);
    // res.sendFile(path.join(__dirname, '..', '/views/products/add-product.html'));
  
    res.redirect('/products')
}
// exports.products = products;