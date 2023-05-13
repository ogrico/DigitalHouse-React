const { Router } = require('express'),
    userController = require('../controller/user.controller')

const router = Router()

router.get('/', userController.getAll)
router.get('/:id', userController.getUser)

module.exports = router