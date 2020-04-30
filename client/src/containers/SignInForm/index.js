import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

import NameInput from "../../components/NameInput";
import "./style.css";

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
                id="signin-modal"
                open={open}
                onOpen={this.open}
                onClose={this.close}
                size="small"
                trigger={
                    <Button id="SignInBtn" size="huge">
                        Sign In
                    </Button>
                }
            >
                <Modal.Header id="signin-header">Sign In</Modal.Header>
                <Modal.Content id="signin-content">
                    <NameInput
                        id="name-input"
                        getName={this.handleNameChange}
                        name={this.state.name}
                    />
                </Modal.Content>
                <Modal.Actions id="signin-action">
                    <Button>
                        Sign In
                    </Button>
                </Modal.Actions>
            </Modal>
        );

    }
};

export default SignInForm;