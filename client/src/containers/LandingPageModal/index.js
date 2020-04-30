import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";

import SignUpForm from "../SignUpForm";
import SignInForm from "../SignInForm";
import "./style.css";

class LandingPageModal extends Component {
    state = { open: false };

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
                    <Button size="massive" id="GetStartedBtn">
                            Get Started
                    </Button>
                        
            
                }
            >
                <Modal.Header>
                    Don't have an account? Sign up and start chatting!
                </Modal.Header>
                <Modal.Content>
                    <div id="signup-btn">
                        <SignUpForm socket={this.props.socket} />
                    </div>
                </Modal.Content>
                <Modal.Header>
                    Already have an account? Enter your name and sign in!
                </Modal.Header>
                <Modal.Content>
                    <div id="signin-btn">
                        <SignInForm socket={this.props.socket} />
                    </div>
                </Modal.Content>
            </Modal>
        )
    }

};

export default LandingPageModal;