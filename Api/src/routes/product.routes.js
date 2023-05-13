const { Router } = require('express'),
    productController = require('../controller/product.controller')

const router = Router()

router.get('/', productController.getAll)
router.get('/:id', productController.getProduct)

module.exports = router