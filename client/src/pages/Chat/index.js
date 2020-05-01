import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import moment from 'moment';
import ChatRoomHeader from "../../components/ChatRoomHeader";
import ChatSideBar from "../../components/ChatSideBar";
import MessageContainer from "./../../components/MessageContainer";
import MessageInputBar from "../../components/MessageInputBar";
import LeaveBtn from "../../components/LeaveBtn";
import ReactDOM from "react-dom";
import "./style.css";


class Chat extends Component {
    state = {
        name: "",
        userId:1,
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
       
        this.getUsers();
        this.receiveMessage();
        this.userLeft();
        this.userJoin();
        // this.getUserById();
    }


    componentWillUnmount() {
        this.handleLeave();
    }


    getUsers = () => {
        this.props.socket.emit("getUsers", users => {
            this.setState({ users });
        })
    }

    userJoin = () => {
        this.props.socket.on("userJoin", newUser =>{
            console.log(newUser);
            console.log(newUser[0].name, newUser[0].id);
            this.setState({name:newUser[0].name, userId:newUser[0].id, users: [...this.state.users, newUser] });
            this.getUsers();
            this.userJoinMessage(newUser)
        })
    }

    // getUserById = () => {
    //     this.props.socket.emit("getUserById", this.state.userId, user =>{
    //         console.log(user);
    //         console.log(user[0].name, user[0].id);
    //         this.setState({name:user[0].name, userId:user[0].id });
    //     })
    // }

    createMessage = () => {
        this.props.socket.emit("createMessage", { name: this.state.name, title: this.state.message, timeStamp: moment().format('l, h:mm a'), userId: this.state.userId }, newMessage => {
            this.setState({ messages: [...this.state.messages, ...newMessage], message: '', placeholder:"Send a Message", messageError: false,});
            this.scrollToBottom();
        })
    };

    receiveMessage = () => {
        this.props.socket.on("messageReceive", newMessage => {
            this.setState({ messages: [...this.state.messages, ...newMessage] });
            this.scrollToBottom();
        })
    }

    userLeftMessage = (data) => {
            let leftMessage = {name: "AllChat",
            title: `${data.name} has left the chat!`,timeStamp: moment().format('l, h:mm a')}
            console.log(leftMessage);
            this.setState({ messages: [...this.state.messages,leftMessage ] });
            this.scrollToBottom();
        }

    userJoinMessage = (newUser) => {
            let joinMessage = {name: "AllChat",
            title: `${newUser[0].name} has joined the chat!`,timeStamp: moment().format('l, h:mm a')}
            console.log(joinMessage);
            this.setState({ messages: [...this.state.messages,joinMessage ] });
            this.scrollToBottom();
        }
    

    userLeft = () => {
        this.props.socket.on("userLeft", (data) => {
            console.log(this);
            this.getUsers();
            this.userLeftMessage(data)
        })
    }

    handleMessageChange = e => {
        const { value } = e.target;
        this.setState({ message: value });
        
        
    };

    handleEnter = e => {
        if (e.keyCode===13){
            this.handleSend(e);

        } else {
           return
        }
    }

    handleSend = (e) => {
        e.preventDefault();
        this.checkInputs(e);
        if (this.state.message.length === 0) {
            this.setState({ placeholder: "Cannot be blank!" })
        } else {
            this.createMessage();
        };
    };

    scrollToBottom = () => {
        let chatTextArea = document.getElementById("message-container");
        const scrollHeight = chatTextArea.scrollHeight;
        const height = chatTextArea.clientHeight;
        const maxScrollTop = scrollHeight - height;
        ReactDOM.findDOMNode(chatTextArea).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
      };

    handleLeave = () => {
        this.props.socket.emit("leaveRoom", { name:this.state.name, userId: this.state.userId }, status => {
            console.log(status);
        })
    }

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
                                        handleEnter = {this.handleEnter}
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