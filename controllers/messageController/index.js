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
            connection.query(messageQueries.getAllMessages, (err, messages) => {
                if (err) throw err;
                cb(messages);
            });
        });
    },
    
}