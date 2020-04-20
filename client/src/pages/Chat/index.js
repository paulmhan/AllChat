import React, { Component } from "react";
import ChatRoomHeader from "../../components/ChatRoomHeader";
import ChatSideBar from "../../components/ChatSideBar";
import ChatContainer from "../../components/ChatContainer";
import MessageInputBar from "../../components/MessageInputBar";
import SendBtn from "../../components/SendBtn";
import LeaveBtn from "../../components/LeaveBtn";
import Footer from "../../components/Footer"; 

class Chat extends Component {
    render() {
        return (
            <div>
                <ChatRoomHeader />
                <ChatSideBar />
                <ChatContainer />
                <MessageInputBar />
                <SendBtn />
                <LeaveBtn />
                <Footer/>
            
            </div>
        )

    }
}

export default Chat;