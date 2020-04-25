require('dotenv').config()
const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const routes = require('./routes');
const userController = require("./controllers/userController")

//for production only
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'));
}

//middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Prepend / to any route declared inside of routes
app.use(routes);

//socket.io
io.on("connection", socket => {

    console.log("New client connected.");


    // socket.on("getMessages", (cb) => {
    //     messageController.getMessages(messages => {
    //         cb(messages);
    //     })
    // })

    socket.on("getUsers", (cb) => {
        userController.getUsers(users => {
            cb(users);
        })
    })

    socket.on("getRoom", (cb) => {
        userController.getRoom(room => {
            cb(room);
        })
    })

    socket.on("disconnect", () => {
        console.log("Client disconnected.");
    })
})


const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));

