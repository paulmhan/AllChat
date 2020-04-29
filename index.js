require('dotenv').config();
const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const userController = require("./controllers/userController");
const messageController = require("./controllers/messageController");
const roomController = require("./controllers/roomController");
const botName = 'AllChat Bot';

//for production only
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'));
}
//middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Prepend / to any route declared inside of routes
// app.use(routes);
//socket.io
io.on("connection", socket => {

    console.log("New client connected.");

    socket.on("getMessage", (cb) => {
        messageController.getMessages(messages => {
            cb(messages);
        })
    })
    // socket.broadcast.emit('user connected');

    socket.on("getUsers", (cb) => {
        roomController.getRoomUsers(users => {
            cb(users);
        })
    })
    
    socket.on("createUser", (user, cb) => {
        userController.createUser(user, newUser => {
            cb(newUser);
        })
    })
    
    socket.on("createMessage", (message, cb) => {
        messageController.createMessage(message, newMessage => {
            // console.log(newMessage)
            socket.broadcast.emit("messageReceive", newMessage);
            
            cb(newMessage);
        })
        // socket.broadcast.emit(newMessage);
    })

    socket.on("leaveRoom", (data, cb) => {
        roomController.deleteUserId(data, status => {
            if(status.affectedRows !== 0){
                io.broadcast.emit("userLeft");
            }
            cb({status: true});
        })
    })
    

    socket.on("disconnect", () => {
        console.log("Client disconnected.");
    })
})
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
