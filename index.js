require('dotenv').config();
const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const userController = require("./controllers/userController");
const messageController = require("./controllers/messageController");
const roomController = require("./controllers/roomController");

//for production only
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'));
}

//middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//socket.io
io.on("connection", socket => {
    console.log("New client connected.");

    socket.on("createUser", (user, cb) => {
        
        userController.createUser(user, newUser => {
            cb(newUser);
            socket.user=newUser;
        })
    })

    socket.on("getMessage", (cb) => {
        messageController.getMessages(messages => {
            cb(messages);
        })
    })

    socket.on("getUsers", cb => {
        roomController.getRoomUsers(users => {
            cb(users);
        })
    })

    socket.on("currentJoin", newUser => {
        socket.broadcast.emit("userJoined", newUser)
    })

    
    socket.on("createMessage", (message, cb) => {
        messageController.createMessage(message, newMessage => {
            socket.broadcast.emit("messageReceive", newMessage);
            cb(newMessage);
        })
    })
    socket.on("onKeyUp", (name, cb)=>{
        socket.broadcast.emit("userTypingMessage", name);
        cb(name);
    })

    socket.on("leaveRoom", (data, cb) => {
        
        roomController.deleteUserId(data, status => {
            if (status.affectedRows !== 0) {
                socket.broadcast.emit("userLeft", data);
               console.log(data, "I am in LeaveRoom");
            }
            cb({ status: true });
        })
    })


    socket.on("disconnect", () => {
        console.log("Client disconnected.");
        socket.broadcast.emit("userCloseTab", socket.user)
        console.log(socket.user, "I am in userCloseTab");
    })
})
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
