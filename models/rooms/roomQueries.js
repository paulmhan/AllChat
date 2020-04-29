const insertIdtoRoom = "INSERT INTO rooms (userId) VALUES (?);";
const getRoomUsers = "SELECT userId,users.name FROM rooms LEFT JOIN users ON rooms.userId = users.id;";
const deleteUserId = "DELETE FROM rooms (userId) WHERE id = ?;"

module.exports = {
    insertIdtoRoom,
    getRoomUsers,
    deleteUserId,
};

