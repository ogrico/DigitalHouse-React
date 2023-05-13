const { User } = require('../database/asocciations')

const userController = {

    getAll: async (req, res) => {
        try {

            const pageNumber = Number.parseInt(req.query.page)
            let page = 0,
                size = 10

            if (!Number.isNaN(pageNumber) && pageNumber > 0) page = pageNumber

            const users = await User.findAndCountAll({
                attributes: ['id', 'firstname', 'lastname', 'avatar', 'state', 'email','imgPublic'],
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
            res.status(500).json({ error })
        }
    }
}

module.exports = userController