const connection = require('../../config/connection');
const userQueries = require('../../models/users/userQueries');
const roomQueries = require('../../models/rooms/roomQueries');



module.exports = {
    getUserById: (req, res) => {
        
        const { userId } = req.params;
       
        connection.query(userQueries.getUserById, parseint(userId), (err, user) => {
            if (err) throw err;
            if(err) {
                return res.json(err);
            }
            return res.json(users[0]);
        });
    },
    createUser: (data, callback) => {
        const { name } = data;
        connection.query(userQueries.createUser, name, err => {
            if (err) throw err;
            connection.query(userQueries.getUserByName, name, (err, newUser) => {
                if (err) throw err;
                //create insert userid into room table
                connection.query(roomQueries.insertIdtoRoom, newUser[0].id, err => {
                    if (err) throw err;
                    callback(newUser);
                })
            });
        });
    },
}