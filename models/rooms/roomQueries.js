const createRoom = "INSERT INTO rooms (room_name) VALUES (?);";
const getRoom = "SELECT * FROM rooms;";
const deleteRoom = "DELETE FROM rooms (room_name) WHERE id = ?;";
const getRoomById = "SELECT * FROM rooms WHERE id = ?;";


module.exports = {
    createRoom,
    getRoom,
    deleteRoom,
    getRoomById,
};

