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
        const { todoId } = req.params;
        connection.query(userQueries.deleteUser, parseInt(todoId), (err, dbRes) => {
            if(err) {
                throw err;
            }
            return res.json({ success: true });
        });
    },
    getUserById: (req, res) => {
        const { todoId } = req.params;
        connection.query(userQueries.getUserById, parseInt(todoId), (err, todos) => {
            if(err) {
                return res.json(err);
            }
            return res.json(todos[0]);
        });
    },
}