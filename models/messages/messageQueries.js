const createMessage = "INSERT INTO messages (message) VALUES (?);";
const getMessages = "SELECT * FROM messages;";
const deleteMessage = "DELETE FROM messages (message) WHERE id = ?;";



module.exports = {
    createMessage,
    getMessages,
    deleteMessage,
};