const connection = require('../../config/connection');
const messageQueries = require('../../models/messages/messageQueries');


module.exports = {
    getMessages: cb => {
        connection.query(messageQueries.getMessages, (err, text) => {
            if(err) throw err;
            cb(text);
        });
    },
    createMessage: (req, res) => {
        const { message } = req.body;
        connection.query(messageQueries.createMessage, message, (err, text) => {
            if (err) throw err;
            res.json(text);
        });
    },
    // deleteUser: (req, res) => {
    //     const { userId } = req.params;
    //     connection.query(userQueries.deleteUser, parseInt(userId), (err, dbRes) => {
    //         if(err) throw err;
        
    //         return res.json({ success: true });
    //     });
    // },
    // getUserById: (req, res) => {
    //     const { userId } = req.params;
    //     connection.query(userQueries.getUserById, parseInt(userId), (err, users) => {
    //         if(err) {
    //             return res.json(err);
    //         }
    //         return res.json(users[0]);
    //     });
    // },
}