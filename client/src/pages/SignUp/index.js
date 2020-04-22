import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

// import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import SignUpHeader from "../../components/SignUpHeader";
import UsernameInput from "../../components/UsernameInput";
import RoomDropdown from "../../components/RoomDropdown";
// import JoinChatBtn from "../../components/JoinChatBtn";

class SignUp extends Component {
    state = {
        name: "",
        room: "",
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
        if(!this.state.name || !this.state.room){
            e.preventDefault();
            console.log("Need to input both name and room");
        } else {
            console.log("Welcome!");
        }
    }

    render() {
        return (
            <Grid container>
                <SignUpHeader />
                <UsernameInput
                    getName={this.handleNameChange}
                />
                <RoomDropdown
                    getRoom={this.handleRoomChange}
                />
                <Link onClick={this.checkInputs} to={`/chat?name=${this.state.name}&room=${this.state.room}`}>
                    <button className="button mt-20" type="submit"> Join Chat Room! </button>
                </Link>
            </div>
                )
        
            }
        }
        
export default SignUp;