const createMessage = "INSERT INTO messages (title,timeStamp,roomId, userId) VALUES (?,?,?,?);";
const getMessages = "SELECT * FROM messages;";
const deleteMessage = "DELETE FROM messages (message) WHERE id = ?;";



module.exports = {
    createMessage,
    getMessages,
    deleteMessage,
};