const { User } = require('../database/asocciations')

const userController = {

    getAll: async (req, res) => {
        try {

            const pageNumber = Number.parseInt(req.query.page)
            let page = 0,
                size = 10

            if (!Number.isNaN(pageNumber) && pageNumber > 0) page = pageNumber

            const users = await User.findAndCountAll({
                attributes: ['id', 'firstname', 'lastname', 'avatar', 'state', 'email', 'imgPublic'],
                limit: size,
                offset: page * size
            })

            res.status(200).json(
                {
                    records: users.count,
                    totalPage: Math.ceil(users.count / size),
                    recordsPerPage: size,
                    page: page,
                    users: users.rows
                }
            )

        } catch (error) {
            console.log(error)
            let er = []
            er.push(''+error+'')
            res.status(500).json( {error: er} )
        }

    },
    getUser: async (req, res) => {
        try {

            const user = await User.findAll({
                attributes: ['id', 'firstname', 'lastname', 'avatar', 'state', 'email', 'imgPublic'],
                where: { id: req.params.id }
            })

            res.status(200).json(
                {
                    user
                }
            )

        } catch (error) {
            console.log(error)
            let er = []
            er.push(''+error+'')
            res.status(500).json( {error: er} )
        }

    }
}

module.exports = userController