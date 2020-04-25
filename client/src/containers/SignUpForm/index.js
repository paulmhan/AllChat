import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "semantic-ui-react";
import RoomInput from "../../components/RoomInput";
import UsernameInput from "../../components/UsernameInput";
import SignUpHeader from "../../components/SignUpHeader";
import axios from "axios";

class SignUpForm extends Component {
    state = {
        open: false,
        name: "",
        room: "",
        userNameError: false,
        roomNameError: false
    };

    handleNameChange = e => {
        const { value } = e.target;
        this.setState({ name: value });
    };

    handleRoomChange = e => {
        const { value } = e.target;
        this.setState({ room: value });
    };

    checkInputs = e => {
        if (!this.state.name || !this.state.room) {
            e.preventDefault();
            this.setState({ userNameError: true})
        }

        let roomNameError;
        let userNameError;

        if(this.state.name.length === 0){
            userNameError = true;
        } else {
            userNameError = false;

        }
        if(this.state.room.length === 0){
            roomNameError = true;
        } else {
            roomNameError = false;
        }

        // Check if one is true
        // if so, we have an error. set the state
        if(userNameError || roomNameError) {
           this.setState({ userNameError, roomNameError });
        } else {
            localStorage.setItem("name", this.state.name)
            this.createUser();
            // this.createRoom();
        }
    }

    createUser = async () => {
        const { data } = await axios.post("/api/user/createuser", {name: this.state.name});
        console.log(data);
        //has to be userid from the database and can be stored to local storage for current user and grab it
        
    };

    createRoom = async () => {
        const { data } = await axios.post("/api/user/createroom", {room: this.state.room})
        console.log(data);
    };

    open = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {
        const { open } = this.state;

        return (
            <Modal
                open={open}
                onOpen={this.open}
                onClose={this.close}
                size="small"
                trigger={
                    <Button primary icon>
                        Get Started
                    </Button>
                }
            >
                <Modal.Header>
                    <SignUpHeader />
                </Modal.Header>
                <Modal.Content>
                    <UsernameInput
                        getName={this.handleNameChange}
                        name={this.state.name}
                        error={this.state.userNameError}
                    />
                    <br />
                    <RoomInput
                        getRoom={this.handleRoomChange}
                        name={this.state.room}
                        error={this.state.roomNameError}
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Link to={"/chat"}>
                        <button onClick={(e) => this.checkInputs(e)} className="button mt-20" type="submit"> Join Chat Room! </button>
                    </Link>
                </Modal.Actions>
            </Modal>
        )
    }
};

export default SignUpForm;