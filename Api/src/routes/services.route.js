const { Router } = require('express'),
    serviceController = require('../controller/service.controller')

const router = Router()

router.get('/status', serviceController.services)

module.exports = router