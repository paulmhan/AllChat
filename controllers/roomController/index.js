const connection = require('../../config/connection');
const roomQueries = require('../../models/rooms/roomQueries');


module.exports = {
    // createRoom: (data, cb) => {
    //     const { room } = data;
    //     connection.query(roomQueries.createRoom, room, err => {
    //         if (err) throw err;
    //         connection.query(roomQueries.getRoomByName, room, (err, newRoom) => {
    //             if (err) throw err;
    //             cb(newRoom);
    //         });
    //     });
    // },
    // deleteRoom: (req, res) => {
    //     const { roomId } = req.params;
    //     connection.query(roomQueries.deleteRoom, parseInt(roomId), (err, dbRes) => {
    //         if(err) throw err;
    //         res.json({ success: true });
    //     });
    // },
    // getRoomById: (req, res) => {
    //     const { roomId } = req.params;
    //     connection.query(roomQueries.getRoomById, parseInt(roomId), (err, rooms) => {
    //         if(err) {
    //             return res.json(err);
    //         }
    //         return res.json(rooms[0]);
    //     });
    // },
    // getRoomById: (data, cb) => {
    //     const { room } = data;
    //     connection.query(roomQueries.getRoomById, room, err => {
    //         if (err) throw err;
    //         connection.query(userQueries.getUserByName, name, (err, newUser) => {
    //             if (err) throw err;
    //             cb(newUser);
    //         });
    //     });
    // },
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

