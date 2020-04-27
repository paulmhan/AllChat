import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
// import RoomInput from "../../components/RoomInput";
import NameInput from "../../components/NameInput";
import { withRouter } from "react-router-dom";



class SignUpForm extends Component {
    state = {
        open: false,
        name: "",
        // room: "",
        userNameError: false,
        // roomNameError: false
    };

    handleNameChange = e => {
        const { value } = e.target;
        this.setState({ name: value });
    };

    // handleRoomChange = e => {
    //     const { value } = e.target;
    //     this.setState({ room: value });
    // };

    checkInputs = async (e) => {
        if (!this.state.name) {
            e.preventDefault();
            this.setState({ userNameError: true })
        }

        // let roomNameError;
        let userNameError;

        if (this.state.name.length === 0) {
            userNameError = true;
        } else {
            userNameError = false;

        }
        // if (this.state.room.length === 0) {
        //     roomNameError = true;
        // } else {
        //     roomNameError = false;
        // }

        // Check if one is true
        // if so, we have an error. set the state
        if (userNameError) {
            this.setState({ userNameError });
        } else {
            localStorage.setItem("name", this.state.name)
            let createdUser = this.createUser()
            // let createdRoom = this.createRoom();
            if (createdUser) {
                console.log("Condition Checked");
                this.props.history.push("/chat");
            }

        }
    }

    createUser = () => {
        this.props.socket.emit("createUser", { name: this.state.name }, newUser => {
            localStorage.setItem("userId", newUser[0].id);
        })
        return this.state.name;
    };

    // createRoom = () => {
    //     this.props.socket.emit("createRoom", { room: this.state.room }, newRoom => {
    //         localStorage.setItem("roomId", newRoom[0].id);git add
    //     })
    //     return this.state.room;
    // };

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
                    <br />
                    {/* <RoomInput
                        getRoom={this.handleRoomChange}
                        name={this.state.room}
                        error={this.state.roomNameError}
                    /> */}
                </Modal.Content>
                <Modal.Actions>
                    {/* <Link to={"/chat"}> */}
                    <button onClick={(e) => this.checkInputs(e)} className="button mt-20" type="submit"> Join Chat Room! </button>
                    {/* </Link> */}
                </Modal.Actions>
            </Modal>
        )
    }
};

export default withRouter(SignUpForm);