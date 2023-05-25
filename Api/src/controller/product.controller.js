const { Product, Size, Category } = require('../database/asocciations'),
    countByCategory = (products) => {
        let b = 0, e = 0, s = 0
        products.forEach(element => {
            if (element.category.id == 1) b++
            if (element.category.id == 2) e++
            if (element.category.id == 3) s++
        })
        return {
            Bicicletas: b,
            Equipamiento: e,
            Suplementos: s
        }
    }

const productController = {

    getAll: async (req, res) => {

        try {

            const pageNumber = Number.parseInt(req.query.page)
            let page = 0,
                size = 50,
                products = []
            if (!Number.isNaN(pageNumber) && pageNumber > 0) page = pageNumber

            const response = await Product.findAll({
                include: [Size, Category],
                attributes: ['id', 'name', 'description'],
                limit: size,
                offset: page * size
            }), byCategory = countByCategory(response)
            console.log(response);
            response.forEach(element => {
                products.push({
                    ...element.dataValues,
                    detail: 'http://localhost:8086/api/products/' + element.id
                })
            })

            res.status(200).json(
                {
                    records: response.length + 1,
                    totalPage: Math.ceil(response.length / size),
                    recordsPerPage: size,
                    countByCategory: byCategory,
                    page: page,
                    products: products
                }
            )

        } catch (error) {

            console.log(error)
            er.push('' + error + '')
            res.status(500).json({ error: er })

        }

    },
    getProduct: async (req, res) => {
        try {

            const product = await Product.findByPk(req.params.id,
                {
                    include: [Size, Category]
                })

            res.status(200).json(
                {
                    product
                }
            )

        } catch (error) {
            console.log(error)
            let er = []
            er.push('' + error + '')
            res.status(500).json({ error: er })
        }
    },
    gerCategory: async (req, res) => {

        try {
            const categorys = await Category.findAll(
                {
                    include:[Product]
                }
            )
            res.status(200).json(
                {
                    categorys
                }
            )

        } catch (error) {
            console.log(error)
            let er = []
            er.push('' + error + '')
            res.status(500).json({ error: er })
        }
    }

}

module.exports = productController