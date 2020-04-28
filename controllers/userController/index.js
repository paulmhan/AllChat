const connection = require('../../config/connection');
const userQueries = require('../../models/users/userQueries');
const roomQueries = require('../../models/rooms/roomQueries');



module.exports = {
    getUserById: (req, res) => {
        const { userId } = req.params;
        connection.query(userQueries.getUserById, parseInt(userId), (err, users) => {
            if(err) {
                return res.json(err);
            }
            return res.json(users[0]);
        });
    },
    createUser: (data, cb) => {
        const { name } = data;
        connection.query(userQueries.createUser, name, err => {
            if (err) throw err;
            connection.query(userQueries.getUserByName, name, (err, newUser) => {
                if (err) throw err;
                //create insert userid into room table
                console.log(newUser[0].id);
                connection.query(roomQueries.insertIdtoRoom, newUser[0].id, err => {
                    if (err) throw err;
                    cb(newUser);
                })
            });
        });
    },
}