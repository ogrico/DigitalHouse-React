const { User } = require('../database/asocciations')

const userController = {
    /**
     * 
     * @param {string} req 
     * @param {JSON} res 
     * @return {JSON}
     */
    getAll: async (req, res) => {
        try {

            const pageNumber = Number.parseInt(req.query.page)
            let page = 0,
                size = 10,
                users = []

            if (!Number.isNaN(pageNumber) && pageNumber > 0) page = pageNumber

            const response = await User.findAndCountAll({
                attributes: ['id', 'firstname', 'lastname', 'email'],
                limit: size,
                offset: page * size
            })

            response.rows.forEach(element => {
                users.push({
                    ...element.dataValues,
                    detail: 'http://localhost:8086/api/users/' + element.id
                })
            })

            res.status(200).json(
                {
                    records: response.count,
                    totalPage: Math.ceil(response.count / size),
                    recordsPerPage: size,
                    page: page,
                    users: users
                }
            )

        } catch (error) {
            console.log(error)
            let er = []
            er.push('' + error + '')
            res.status(500).json({ error: er })
        }

    },
    getUser: async (req, res) => {
        try {

            const user = await User.findByPk(req.params.id, {
                attributes: ['id', 'firstname', 'lastname', 'avatar', 'state', 'email', 'imgPublic']
            })

            res.status(200).json(
                {
                    user
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

module.exports = userController