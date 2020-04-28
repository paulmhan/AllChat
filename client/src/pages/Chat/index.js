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
        message: "",
        placeholder: "Send a Message",
        messageError: false,
        messages: [{
            name: "AllChat",
            title: "Welcome to AllChat!",
            timeStamp: moment().format('l, h:mm a')
        }],
        users: [],
        // userId: localStorage.getItem('userId'),
        messageId: ""
    }

    componentDidMount() {
        // const userId = localStorage.getItem("userId");
        // console.log(this.state.userId)
        this.getUsers();
        // this.setState({ userId });
    }

    // componentWillUnmount() {
    //     localStorage.clear()
    // }


    getUsers = () => {
        const name = localStorage.getItem("name");
        this.props.socket.emit("getUsers", users => {
            console.log(users);
            this.setState({ users, name });
        })
    }

    createMessage = () => {
        this.props.socket.emit("createMessage", { title: this.state.message, timeStamp: moment().format('l, h:mm a'), userId: 1, roomId: 2 }, newMessage => {
            console.log(newMessage);
        })
        return this.state.messages
    };

    getMessages = () => {
        this.props.socket.emit("getMessages", messages => {
            console.log(messages);
            this.setState({
                messages,
                placeholder: "Send a Message",
                message: "",
                messageError: false
            });
        })
    }

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
            const newMessage = {
                title: this.state.message,
                timeStamp: moment().format('l, h:mm a')
            };
            console.log(newMessage)
            this.createMessage();
            this.getMessages();
        };
    };

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
                                    <ChatRoomHeader />
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
                                        // checkInputs = {this.checkInputs()}
                                        handleSend={this.handleSend}
                                    // error={this.state.messageError}
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