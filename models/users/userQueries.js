const createUser = "INSERT INTO users (name) VALUES (?);";
const getUsers = "SELECT * FROM users;";
const deleteUser = "DELETE FROM users (name) WHERE id = ?;";
const getUserById = "SELECT * FROM users WHERE id = ?;";
const getUserByName = "SELECT * FROM users WHERE name = ?;";



module.exports = {
    createUser,
    getUsers,
    deleteUser,
    getUserById,
    getUserByName,
};

