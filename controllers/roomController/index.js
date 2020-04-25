const connection = require('../../config/connection');
const messageQueries = require('../../models/rooms/roomQueries');


module.exports = {
    getRoom: cb => {
        connection.query(roomQueries.ge, (err, room) => {
            if(err) throw err;
            cb(room);
        });
    },
    createRoom: (req, res) => {
        const { name } = req.body;
        connection.query(roomQueries.createRoom, name, (err, room) => {
            if (err) throw err;
            res.json(room);
        });
    },
    deleteRoom: (req, res) => {
        const { roomId } = req.params;
        connection.query(roomQueries.deleteRoom, parseInt(roomId), (err, dbRes) => {
            if(err) throw err;
        
            return res.json({ success: true });
        });
    },
    getRoomById: (req, res) => {
        const { roomId } = req.params;
        connection.query(roomQueries.getRoomById, parseInt(roomId), (err, rooms) => {
            if(err) {
                return res.json(err);
            }
            return res.json(rooms[0]);
        });
    },
}