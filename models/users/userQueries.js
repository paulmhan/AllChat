const createUser = "INSERT INTO users (name) VALUES (?);";
const getUsers = "SELECT * FROM users;";
const deleteUser = "DELETE FROM users (name) WHERE id = ?;";
const getUserById = "SELECT * FROM users WHERE id = ?;";


module.exports = {
    createUser,
    getUsers,
    deleteUser,
    getUserById,
};

