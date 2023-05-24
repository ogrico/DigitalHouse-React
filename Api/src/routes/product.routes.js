const { Router } = require('express'),
    productController = require('../controller/product.controller')

const router = Router()

router.get('/', productController.getAll)
router.get('/product/:id', productController.getProduct)
router.get('/categorys', productController.gerCategory)

module.exports = router