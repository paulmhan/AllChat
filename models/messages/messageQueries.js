// const createMessage = "INSERT INTO messages (name, title,timeStamp, userId) VALUES (?,?,?,?);";
const createMessage = "INSERT INTO messages (name, title, timeStamp, userId) VALUES (?,?,?,?);";
const getMessageById = "SELECT * FROM messages WHERE id = ?;";
const deleteMessage = "DELETE FROM messages (message) WHERE id = ?;";



module.exports = {
    createMessage,
    getMessageById,
    deleteMessage,
};