import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";
import SignUpHeader from "../../components/SignUpHeader";
import SignUpForm from "../SignUpForm";
import SignInForm from "../SignInForm";

class LandingPageModal extends Component {
    state = { open: false };

    open = () => this.setState({ open: true });
    close = () => this.setState({ open: false });

    render() {
        const { open } = this.state;

        return(
            <Modal
                open={open}
                onOpen={this.open}
                onClose={this.close}
                size="small"
                trigger={
                    <Button primary>
                        Get Started
                    </Button>
                }
            >
                <Modal.Header>
                    <SignUpHeader />
                </Modal.Header>
                <Modal.Content>
                    <SignUpForm socket={this.props.socket}/>
                    <SignInForm socket={this.props.socket}/>
                </Modal.Content>
            </Modal>
        )
    }

};

export default LandingPageModal;