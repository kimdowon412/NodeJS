const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');

// admin/products
router.get('/products', ctrl.get_products );

// admin/products/write
router.get('/products/write', ctrl.get_products_write );
router.post('/products/write', ctrl.post_products_write );

// /admin/products/detail/{{product.id}}
// products/detail/1
router.get('/products/detail/:id', ctrl.get_products_detail)
router.post('/products/detail/:id', ctrl.post_products_detail)

// /admin/products/delete
router.get('/products/delete/:id', ctrl.get_products_delete)


module.exports = router;


