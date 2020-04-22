import React, { Component } from "react";
import io from "socket.io-client"
// import queryString from "query-string";
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


    state = {
        name: "",
        room: "",
    }

    componentDidMount() {
        // const { name, room } = queryString.parse(location.search);
        // console.log(location.search); 
        // console.log(name); 
        // console.log(room); 
    }






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