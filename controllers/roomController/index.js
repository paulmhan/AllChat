const connection = require('../../config/connection');
const roomQueries = require('../../models/rooms/roomQueries');


module.exports = {
    getRoomUsers: cb => {
        connection.query(roomQueries.getRoomUsers, (err, users) => {
            if(err) throw err;
            cb(users);
        });
    },
    getUserById: (data, cb) => {
        connection.query(roomQueries.getUserById, data, (err, user) => {
            if(err) throw err;
            cb(user);
            console.log(user);
        });
    },
    deleteUserId: (data, cb) => {
        const { userId } = data;
        console.log(userId);
        connection.query(roomQueries.deleteUserId, parseInt(userId), (err, status) => {
            if(err) throw err;
            cb(status);
        });
    },
}

