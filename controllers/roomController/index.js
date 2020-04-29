const connection = require('../../config/connection');
const roomQueries = require('../../models/rooms/roomQueries');


module.exports = {
    getRoomUsers: cb => {
        connection.query(roomQueries.getRoomUsers, (err, users) => {
            if(err) throw err;
            cb(users);
        });
    },
    deleteUserId: (data, cb) => {
        const { userId } = data;
        connection.query(roomQueries.deleteUserId, parseInt(userId), err => {
            if(err) throw err;
            cb(userId);
        });
    },
}

