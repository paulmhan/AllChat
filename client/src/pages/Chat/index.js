import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import io from "socket.io-client"
import queryString from "query-string";
import ChatRoomHeader from "../../components/ChatRoomHeader";
import ChatSideBar from "../../components/ChatSideBar";
import MessageContainer from "./../../components/MessageContainer"
import MessageInputBar from "../../components/MessageInputBar";
import SendBtn from "../../components/SendBtn";
import LeaveBtn from "../../components/LeaveBtn";

// socket.emit("connection", { name: "hello" })


class Chat extends Component {
    
    state = {
        name: "",
        room: "",
    }
    
    componentDidMount() {
        const { name, room } = queryString.parse(window.location.search);
        this.setState({ name });
        this.setState({ room });
        let socket = io("http://localhost:3001");
        console.log(socket);
        socket.emit("joinChat", { name,room }) 
    }

    // componentWillUnmount() {
    //     let socket = io("http://localhost:3001");
    //     socket.emit("disconnect");
    //     socket.off();
    // }

    render() {
        return (
            <Grid container>
                <ChatRoomHeader />
                <ChatSideBar />
                <MessageContainer />
                <MessageInputBar />
                <SendBtn />
                <LeaveBtn />
            </Grid>
            
        )

    }
}

export default Chat;