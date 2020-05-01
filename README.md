# AllChat Messaging App

Much like other messaging apps, AllChat connects people from all around the world and all walks of life. However, unlike other messenger services, AllChat allows its users to effectively communicate, even if they do not speak the same language.

## Motivation

As communication continues to increase on a global scale, so too does the demand for quick, reliable translation.

## Build Status

Currently able to create a user and sustain a single chat room shared by multiple users. Sign-in authentication, multiple chat rooms, and dynamic translation of messages are still in progress. 

## Code Style

Standard

## Screenshots
![](client/src/assets/images/LandingPage.png)
![](client/src/assets/images/FirstModal.png)
![](client/src/assets/images/SignUpModal.png)
![](client/src/assets/images/Chat.png)

## Tech/Framework Used

- ReactJS
- ReactDOM
- ReactRouterDOM
- Semantic-UI-React
- CSS
- Socket.IO
- MySQL
- Express
- React-Moment
- Moment-Timezone


## Features

There are many different messaging apps out there. You got the default messenger on your typical smartphone; that will let you communicate across the country. Facebook Messenger and WhatsApp allow you to connect with people outside your country, but what if you wanted to talk to someone in France, but couldn't speak a lick of French? 

That's where AllChat comes in. 

AllChat utilizes its built-in API to automatically translate the sender's message into the recipient's native language, allowing for more intuitive international communication. Whether its for sealing that important business deal, or discovering that special someone from across the globe, AllChat brings us all closer together.

## Code Example

import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import moment from 'moment';
import ChatRoomHeader from "../../components/ChatRoomHeader";
import ChatSideBar from "../../components/ChatSideBar";
import MessageContainer from "./../../components/MessageContainer";
import MessageInputBar from "../../components/MessageInputBar";
import LeaveBtn from "../../components/LeaveBtn";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
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
        newUser:[],
        messageId: ""
    }


    componentDidMount() {
        this.getUsers();
        this.receiveMessage();
        this.userLeft();
        this.userJoin();
    }


    componentWillUnmount() {
        this.handleLeave();
    }

    getUsers = () => {
        let { newUser } = this.props.history.location.state;
        console.log(this.props.history.location.state);
        this.props.socket.emit("getUsers", users => {
            this.props.socket.emit("currentJoin", {newUser})
            this.setState({
                name: newUser[0].name,
                userId: newUser[0].id, 
                newUser, 
                users
            });
        })
    }

    userJoinMessage = newUser => {
        console.log(newUser);
        let joinMessage = {name: "AllChat",
        title: `${newUser.newUser[0].name} has joined the chat!`,timeStamp: moment().format('l, h:mm a')}
        console.log(joinMessage);
        this.setState({ messages: [...this.state.messages,joinMessage ] });
        // this.scrollToBottom();
    }

    userLeftMessage = data => {
        console.log(data);
        let leftMessage = {name: "AllChat",
        title: `${data.name} has left the chat!`,timeStamp: moment().format('l, h:mm a')}
        console.log(leftMessage);
        this.setState({ messages: [...this.state.messages,leftMessage ] });
        // this.scrollToBottom();
    }


    userJoin = () => {
        this.props.socket.on("userJoined", newUser => {
            console.log(newUser);
            this.userJoinMessage(newUser);
            console.log(this.state.users);
            this.setState({ users:[...this.state.users, ...newUser.newUser] });
        })
    }

    userLeft = () => {
        this.props.socket.on("userLeft", data => {
            this.getUsers();
            this.userLeftMessage(data);
        })
    }


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

    handleLeave = async () => {
        await this.props.socket.emit("leaveRoom", { userId: this.state.userId, name: this.state.name }, status => {
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
                                <Grid.Column width={13}>
                                    <ChatRoomHeader name={this.state.name} />
                                </Grid.Column>
                                <Grid.Column width={3}>
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

export default withRouter(Chat);

## Installation

To render Semantic-UI-React framework:
```
npm i semantic-ui-react
```

## How To Use?

On the landing page, click "Get Started" and enter a username into the modal, then click "Join Chat Room". Once on the chat page, you can message other users who are currently signed in. If you wish to exit the chat, and sign up using a different name, click the "Leave" button in the top-right corner, and repeat the aforementioned steps.

## Contribute

If you wish to contribute, send a code snippet of a component, style, or anything else that can improve our app to one of our e-mail addresses:

- paul.myung.han@gmail.com
- suneetha@gmail.com
- jpgeib2@gmail.com

## Credits

- Paul Han, Front-end Building, Back-end Server, SQL Database/Queries, Socket.IO, GitHub: https://github.com/paulmhan
- Suneetha Burla, Front-end Building, SQL Database/Queries, Socket.IO, GitHub: https://github.com/suneethaburla
- James Geib, Front-end Building, Front-end styling/formatting, GitHub: https://github.com/jpgeib

