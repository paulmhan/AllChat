import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

import AllChatTitle from "../../components/AllChatTitle";
import NameInput from "../../components/NameInput";
// import RoomInput from "../../components/RoomInput";

class SignInForm extends Component {
    state = {
        open: false,
        name: "",
        room: ""
    }

    handleNameChange = e => {
        const { value } = e.target;
        this.setState({ name: value });
    };

    handleRoomChange = e => {
        const { value } = e.target;
        this.setState({ room: value });
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
                    <Button primary>
                        Sign In
                    </Button>
                }
            >
                <Modal.Header><AllChatTitle /></Modal.Header>
                <Modal.Content>
                    <NameInput
                        getName={this.handleNameChange}
                        name={this.state.name}
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button>
                        Sign In
                </Button>
                </Modal.Actions>
            </Modal>
        );

    }
};

export default SignInForm;