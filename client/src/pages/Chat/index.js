import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import moment from 'moment';
import ChatRoomHeader from "../../components/ChatRoomHeader";
import ChatSideBar from "../../components/ChatSideBar";
import MessageContainer from "./../../components/MessageContainer";
import MessageInputBar from "../../components/MessageInputBar";
import LeaveBtn from "../../components/LeaveBtn";
import "./style.css";


class Chat extends Component {
    state = {
        name: "",
        userId:"",
        message: "",
        placeholder: "Send a Message",
        messageError: false,
        messages: [{
            name: "AllChat",
            title: "Welcome to AllChat!",
            timeStamp: moment().format('l, h:mm a')
        }],
        users: [],
       
        messageId: ""
    }



    componentDidMount() {
        // const userId = localStorage.getItem("userId");
        // const name = localStorage.getItem("name");
        
        this.getUsers();
        // this.props.socket.on("updatedUsers", users => {
        //     this.setState({ users });
        // })
        
        // this.props.socket.on("userLeft", () => {
        //     this.getUsers();
        // })
        this.props.socket.on("currentUser", newUser =>{
            console.log(newUser);
            console.log(newUser[0].name, newUser[0].id);

            this.setState({name:newUser[0].name, userId:newUser[0].id, users: [...this.state.users, newUser] })
            this.getUsers()
        })
       
        this.props.socket.on("messageReceive", newMessage => {
            this.setState({ messages: [...this.state.messages, ...newMessage] });
        })

        
    }


    // componentWillUnmount() {
    //     this.handleLeave();
    // }


    getUsers = () => {
        this.props.socket.emit("getUsers", users => {
            this.setState({ users });
        })
    }

    createMessage = () => {
        this.props.socket.emit("createMessage", { name: this.state.name, title: this.state.message, timeStamp: moment().format('l, h:mm a'), userId: this.state.userId }, newMessage => {

            this.setState({ messages: [...this.state.messages, ...newMessage], message: '' });
        })

    };

    handleMessageChange = e => {
        const { value } = e.target;
        this.setState({ message: value });
    };

    handleSend = (e) => {
        e.preventDefault();
        this.checkInputs(e);
        if (this.state.message.length === 0) {
            this.setState({ placeholder: "Cannot be blank!" })
        } else {
            this.createMessage();
        };
    };


    // handleLeave = () => {
    //     this.props.socket.emit("leaveRoom", { userId: this.state.userId }, status => {
    //         console.log(status);
    //     })
    // }

    checkInputs = e => {
        if (!this.state.message) {
            e.preventDefault();
            this.setState({ messageError: true })
        }
        let messageError;
        if (this.state.message.length === 0) {
            messageError = true;
            this.setState({ messageError })
        } else {
            messageError = false;
        }
    }

    render() {
        return (
            <Grid container>
                <Grid.Row
                    stretched>
                    <Grid.Column width={4}>
                        <ChatSideBar users={this.state.users} />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Grid container>
                            <Grid.Row>
                                <Grid.Column width={14}>
                                    <ChatRoomHeader name={this.state.name} />
                                </Grid.Column>
                                <Grid.Column width={1}>
                                    <LeaveBtn />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <MessageContainer
                                        messages={this.state.messages}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column width={16}>
                                    <MessageInputBar
                                        getMessage={this.handleMessageChange}
                                        message={this.state.message}
                                        error={this.state.messageError}
                                        placeholder={this.state.placeholder}
                                        handleSend={this.handleSend}
                                    />
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