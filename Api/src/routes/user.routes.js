const { Router } = require('express'),
    userController = require('../controller/user.controller')

const router = Router()

router.get('/getAll', userController.getAll)
router.get('/getAll/:id', userController.getUser)

module.exports = router