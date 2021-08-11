const products = [];

exports.getProductController = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add My Product', paths: '/add-product' });
};

exports.postProductController = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
};

exports.viewProductsController = (req, res, next) => {
    res.render('shop', {prods: products, pageTitle: 'Shop', paths: '/'});
};