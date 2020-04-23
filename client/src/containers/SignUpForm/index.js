import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Modal } from "semantic-ui-react";
import RoomDropdown from "../../components/RoomDropdown";
import UsernameInput from "../../components/UsernameInput";
// import JoinChatBtn from "../../components/JoinChatBtn";
import SignUpHeader from "../../components/SignUpHeader";

class SecondModal extends Component {
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
                        Proceed <Icon name="right chevron" />
                    </Button>
                }
            >
                <Modal.Header>
                    <SignUpHeader />
                </Modal.Header>
                <Modal.Content>
                    <RoomDropdown
                        getRoom={this.handleRoomChange}
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button 
                        as={ Link }
                        type="submit"
                        onClick={this.checkInputs}
                        to={`/chat?name=${this.state.name}&room=${this.state.room}`}
                    >
                        Join Chat!
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
};



class SignUpForm extends SecondModal {
    
    render() {
        return (
            <Modal trigger={<Button>Get Started</Button>}>
        <Modal.Header>
            <SignUpHeader />
        </Modal.Header>
        <Modal.Content>
            <UsernameInput
                getName={this.handleNameChange}
            />
        </Modal.Content>
        <Modal.Actions>
            <SecondModal />
        </Modal.Actions>
    </Modal>
        );
    }
}

export default SignUpForm;