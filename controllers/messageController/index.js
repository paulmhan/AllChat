const connection = require('../../config/connection');
const messageQueries = require('../../models/messages/messageQueries');


module.exports = {
    getMessages: cb => {
        connection.query(messageQueries.getMessages, (err, text) => {
            if(err) throw err;
            cb(text);
        });
    },
    createMessage: (data, cb) => {
        const { name } = data;
        const { title } = data;
        const { timeStamp } = data;
        const {userId } = data;
        connection.query(messageQueries.createMessage, [name, title,timeStamp,userId], (err, result) => {
            if (err) throw err;
            connection.query(messageQueries.getMessageById, result.insertId, (err, newMessage) => {
                if (err) throw err;
                cb(newMessage);
            });
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