const express = require('express'),
    config = require('../config'),
    cors = require("cors"),
    morgan = require('morgan'),
    servicesRouter = require('../routes/services.routes'),
    userRouter = require('../routes/user.routes'),
    productRouter = require('../routes/product.routes')

class Server {

    constructor() {
        this.app = express()
        this.app.set("port", config.port)
        this.middlewares()
        this.routes()
    }

    middlewares() {
        //Cors
        this.app.use(cors())
        //Lectura y parseo del body
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        //Depuración y carag automatica de los servicios
        this.app.use(morgan("dev"))
    }

    routes() {
        this.app.use('/api/services', servicesRouter)
        this.app.use('/api/users', userRouter)
        this.app.use('/api/products', productRouter)
    }

    listen() {

        this.app.listen(this.app.get("port"), () => {
            console.log('Servidor corriendo en el puerto ', this.app.get("port"))
        })
    }

}

module.exports = Server