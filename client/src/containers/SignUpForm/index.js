import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "semantic-ui-react";
import RoomDropdown from "../../components/RoomDropdown";
import UsernameInput from "../../components/UsernameInput";
// import JoinChatBtn from "../../components/JoinChatBtn";
import SignUpHeader from "../../components/SignUpHeader";

class SignUpForm extends Component {
    state = {
        open: false,
        name: "",
        room: ""
    };

    handleNameChange = e => {
        const { value } = e.target;
        console.log(value);
        this.setState({ name: value });
    };

    handleRoomChange = e => {
        const { value } = e.target;
        console.log(value);
        this.setState({ room: value });
    };

    checkInputs = e => {
        if (!this.state.name || !this.state.room) {
            e.preventDefault();
            console.log("Need to input both name and room");
            console.log(this.state.name);
            console.log(this.state.room);
        } else {
            console.log("Welcome!");
        }
    }

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
                    />
                    <RoomDropdown
                        getRoom={this.handleRoomChange}
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Link onClick={this.checkInputs} to={`/chat?name=${this.state.name}&room=${this.state.room}`}>
                        <button className="button mt-20" type="submit"> Join Chat Room! </button>
                    </Link>
                </Modal.Actions>
            </Modal>
        )
    }
};

export default SignUpForm;