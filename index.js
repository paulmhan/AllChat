require('dotenv').config()
const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const routes = require('./routes');


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
    console.log("New client connected");
    socket.on("connection", data => {
        console.log(data);
    })
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    })
})


const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log('Port started on port: ' + PORT));

//psuedo code

// users
//     - multiple messages
//     - multiple chatrooms
// messages
//     - single user
//     - single chatroom
// chatrooms
//     - multiple users
//     - multiple messages


// login with username
// start with 1 chatroom 