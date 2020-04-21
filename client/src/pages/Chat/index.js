import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import ChatRoomHeader from "../../components/ChatRoomHeader";
import ChatSideBar from "../../components/ChatSideBar";
import ChatContainer from "../../components/ChatContainer";
import MessageInputBar from "../../components/MessageInputBar";
import SendBtn from "../../components/SendBtn";
import LeaveBtn from "../../components/LeaveBtn";
// import Footer from "../../components/Footer"; 

class Chat extends Component {
    render() {
        return (
            <Grid container>
                <ChatRoomHeader />
                <ChatSideBar />
                <ChatContainer />
                <MessageInputBar />
                <SendBtn />
                <LeaveBtn />
                {/* <Footer/> */}
            </Grid>
            
        )

    }
}

export default Chat;