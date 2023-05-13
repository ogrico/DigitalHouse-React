const { Router } = require('express'),
    userController = require('../controller/user.controller')

const router = Router()

router.get('/getAll', userController.getAll)

module.exports = router