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
        // room: "",
        message:"",
        placeholder:"Send a Message",
        messageError: false,
        messages: [],
        users: [],
        messageId:"",
        // roomId:"",
        // userId:""
    }

    componentDidMount = () => {
        // const roomId = localStorage.getItem("roomId");
        // this.setState({ roomId });
        // console.log(roomId);
        const userId = localStorage.getItem("userId");
        // this.setState({ userId });
        console.log(userId);
        this.getUsers();
        // this.getRoom();
        // this.getMessages();

    }

    getUsers = () => {
        const name = localStorage.getItem("name");
        this.props.socket.emit("getUsers", users => {
            // console.log(users);
            this.setState({ users, name });
        })
    }

    // getRoom = () => {
    //     this.props.socket.emit("getRoom", room => {
    //         console.log(room);
    //         this.setState({ room });
    //     })
    // }

    getMessages = () => {
        this.props.socket.emit("getMessages", messages => {
            console.log(messages);
            this.setState({ messages });
        })
    }

    handleMessageChange = e => {
        const { value } = e.target;
        this.setState({ message: value });
    };


    handleSend = (e) => {
        e.preventDefault();
        this.checkInputs(e);
        if(this.state.message.length===0) {
           this.setState({placeholder:"Cannot be blank! "})
        } else {
            const newMessage = {  
                name:this.state.name, 
                title: this.state.message, 
                timeStamp: moment().format('l, h:mm a') 
            };
            //API/socket call here and then set state
            const messages = [...this.state.messages, newMessage];
            //pass this back to the backend and in there socket.on send message and use that query createmessage and get it 
            this.setState({ 
                messages, 
                placeholder:"Send a Message", 
                message:"",
                messageError:false
            });
            
            // socket.emit("sendMessage", {messages})
            // this.setState({ message: "" });
            
        };
        };
        

    checkInputs = e => {
        if (!this.state.message) {
            e.preventDefault();
            this.setState({ messageError: true})
        }

        let messageError;

        if(this.state.message.length === 0){
            messageError = true;
            this.setState({messageError})
        } else {
            messageError = false;
        }


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