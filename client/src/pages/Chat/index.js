import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
// import io from "socket.io-client";
// import axios from "axios";
// import queryString from "query-string";
import ChatRoomHeader from "../../components/ChatRoomHeader";
import ChatSideBar from "../../components/ChatSideBar";
import MessageContainer from "./../../components/MessageContainer";
import MessageInputBar from "../../components/MessageInputBar";
import LeaveBtn from "../../components/LeaveBtn";



class Chat extends Component {
    
    state = {
        name: "",
        room: "",
        users: [],
    }
    
    componentDidMount() {
        this.getUsers();
        
        // const { name, room } = queryString.parse(window.location.search);
        // let socket = io("http://localhost:3001");
        // socket.emit("joinChat", { name,room });
        // this.setState({ name,room });
    }

    getUsers = () => {
        // const { data } = await axios.get("/api/user/getusers");
        this.props.socket.emit("getUsers", users => {
            console.log(users);
            this.setState({ users });
        })
        
    }


    // componentWillUnmount() {
    //     let socket = io("http://localhost:3001");
    //     socket.emit("disconnect");
    //     socket.off();
    // }

    render() {
        return (
            <Grid container>
                <Grid.Row
                    stretched>
                    <Grid.Column width={4}>
                        <ChatSideBar users={this.state.users}/>
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
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        )

    }
}

export default Chat;