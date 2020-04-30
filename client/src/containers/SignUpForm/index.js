import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import NameInput from "../../components/NameInput";
import { withRouter } from "react-router-dom";

import "./style.css";

class SignUpForm extends Component {

    state = {
        open: false,
        name: "",
        room: "Chat Room",
        userNameError: false

    };

    handleNameChange = e => {
        const { value } = e.target;
        this.setState({ name: value });
    };

    checkInputs = async (e) => {
        if (!this.state.name) {
            e.preventDefault();
            this.setState({ userNameError: true });
        }
        let userNameError;
        if (this.state.name.length === 0) {
            userNameError = true;
        } else {
            userNameError = false;
        }
        if (userNameError) {
            this.setState({ userNameError });
        } else {
            localStorage.setItem("name", this.state.name);
            let createdUser = this.createUser();
            if (createdUser) {
                this.props.history.push("/chat");
            }
        }
    }
    
    createUser = () => {
        this.props.socket.emit("createUser", { name: this.state.name}, newUser => {
            console.log("signupform",newUser[0].id);
            // localStorage.setItem("userId", newUser[0].id);
            // localStorage.setItem("name", newUser[0].name);
        })
        return this.state.name;
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
                    <Button id="SignUpBtn" color="green" size="massive">
                        Sign Up
                    </Button>
                }
            >
                <Modal.Header>
                    Sign Up
                </Modal.Header>
                <Modal.Content>
                    <NameInput
                        getName={this.handleNameChange}
                        name={this.state.name}
                        error={this.state.userNameError}
                    />
                </Modal.Content>
                <Modal.Actions>
                    <button onClick={(e) => this.checkInputs(e)} className="button mt-20" type="submit"> Join Chat Room! </button>
                </Modal.Actions>
            </Modal>
        )
    }
};
export default withRouter(SignUpForm);