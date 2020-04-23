const connection = require('../../config/connection');
const userQueries = require('../../models/users/userQueries');


module.exports = {
    getUser: (req, res) => {
        connection.query(userQueries.getUsers, (err, users) => {
            if(err) {
                throw err;
            }
            return res.json(users);
        });
    },
    addUser: (req, res) => {
        const { title } = req.body;
        connection.query(userQueries.addUser, title, (err, dbRes) => {
            if(err) {
                throw err;
            }
            connection.query(userQueries.getUsers, (err, todos) => {
                if(err) {
                    throw err;
                }
                return res.json(todos);
            });
        });
    },
    deleteUser: (req, res) => {
        const { userId } = req.params;
        connection.query(userQueries.deleteUser, parseInt(userId), (err, dbRes) => {
            if(err) {
                throw err;
            }
            return res.json({ success: true });
        });
    },
    getUserById: (req, res) => {
        const { userId } = req.params;
        connection.query(userQueries.getUserById, parseInt(userId), (err, users) => {
            if(err) {
                return res.json(err);
            }
            return res.json(users[0]);
        });
    },
}