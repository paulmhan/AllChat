import React, { Component } from "react";
import io from "socket.io-client"
import ChatRoomHeader from "../../components/ChatRoomHeader";
import ChatSideBar from "../../components/ChatSideBar";
import MessageContainer from "./../../components/MessageContainer"
// import ChatContainer from "../../components/ChatContainer";
import MessageInputBar from "../../components/MessageInputBar";
import SendBtn from "../../components/SendBtn";
import LeaveBtn from "../../components/LeaveBtn";
// import Footer from "../../components/Footer"; 

const socket = io("http://localhost:3001");

socket.emit("connection", { name: "hello" })


class Chat extends Component {
    render() {
        return (
            <div>
                <ChatRoomHeader />
                <ChatSideBar />
                {/* <ChatContainer /> */}
                <MessageContainer />
                <MessageInputBar />
                <SendBtn />
                <LeaveBtn />
                {/* <Footer/> */}
            
            </div>
        )

    }
}

export default Chat;