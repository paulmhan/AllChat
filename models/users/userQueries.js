const addUser = "INSERT INTO users (username) VALUES (?);";
const getUsers = "SELECT * FROM users;";
const deleteUser = "DELETE FROM users (username) WHERE id = ?;";
const getUserById = "SELECT * FROM users WHERE id = ?;";


module.exports = {
    addUser,
    getUsers,
    deleteUser,
    getUserById,
};

