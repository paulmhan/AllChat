const connection = require('../../config/connection');
const roomQueries = require('../../models/rooms/roomQueries');


module.exports = {
    getRoomUsers: cb => {
        connection.query(roomQueries.getRoomUsers, (err, users) => {
            if(err) throw err;
            cb(users);
        });
    },
    deleteUser: (req, res) => {
        const { userId } = req.params;
        connection.query(userQueries.deleteUser, parseInt(userId), (err, dbRes) => {
            if(err) throw err;
            res.json({ success: true });
        });
    },
}

