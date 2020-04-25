const connection = require('../../config/connection');
const userQueries = require('../../models/users/userQueries');


module.exports = {
    getUsers: cb => {
        connection.query(userQueries.getUsers, (err, users) => {
            if(err) throw err;
            cb(users);
        });
    },
    createUser: (req, res) => {
        const { name } = req.body;
        connection.query(userQueries.createUser, name, (err, user) => {
            if (err) throw err;
            res.json(user);
        });
    },
    deleteUser: (req, res) => {
        const { userId } = req.params;
        connection.query(userQueries.deleteUser, parseInt(userId), (err, dbRes) => {
            if(err) throw err;
            res.json({ success: true });
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