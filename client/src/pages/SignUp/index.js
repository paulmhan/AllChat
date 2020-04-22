import React, { Component } from "react";
import SignUpHeader from "../../components/SignUpHeader";
import UsernameInput from "../../components/UsernameInput";
import RoomDropdown from "../../components/RoomDropdown";
import JoinChatBtn from "../../components/JoinChatBtn";

class LandingPage extends Component {
    state = {
        name: "",
        room: "",
    };

    handleNameChange = (e) => {
        const { value } = e.target;
        console.log(value);
        this.setState({ name: value });
    };

    handleRoomChange = (e) => {
        const { value } = e.target;
        console.log(value);
        this.setState({ room: value });
    };

    render() {
        return (
            <div>
                <SignUpHeader />
                <UsernameInput 
                getName={this.handleNameChange} 
                />
                <RoomDropdown 
                getRoom={this.handleRoomChange}
                />
                <JoinChatBtn />
            </div>
        )

    }
}

export default LandingPage;