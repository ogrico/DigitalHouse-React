const serviceController = {
    services: (_, res) => {
        try {
            let date = new Date()
            res.status(200).json({
                "msg": "Servicios arriba",
                "date": date
            })
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    
    }
}

module.exports = serviceController