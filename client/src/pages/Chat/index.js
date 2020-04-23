import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

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
import "./style.css";

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
            <Grid container>
                <Grid.Row
                    stretched>
                    <Grid.Column width={4}>
                        <ChatSideBar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Grid container>
                            <Grid.Row>
                                <Grid.Column width={14}>
                                    <ChatRoomHeader />
                                </Grid.Column>
                                <Grid.Column width={1}>
                                    <LeaveBtn />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid container>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <MessageContainer />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column width={16}>
                                    <MessageInputBar />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        
                        
                        <SendBtn />
                    </Grid.Column>
                </Grid.Row>


                {/* <Footer/> */}
                {/* <ChatContainer /> */}
            </Grid>

        )

    }
}

export default Chat;