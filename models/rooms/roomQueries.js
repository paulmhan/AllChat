const insertIdtoRoom = "INSERT INTO rooms (userId) VALUES (?);";
const getRoomUsers = "SELECT userId,users.name FROM rooms LEFT JOIN users ON rooms.userId = users.id;";

// const deleteRoom = "DELETE FROM rooms (room_name) WHERE id = ?;";
// const getRoomById = "SELECT * FROM rooms WHERE id = ?;";
// const getRoomByName = "SELECT * FROM rooms WHERE room_name = ?;";



module.exports = {
    insertIdtoRoom,
    getRoomUsers,
    // deleteRoom,
    // getRoomById,
    // getRoomByName,
};

