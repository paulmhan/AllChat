import React, { Component } from "react";
// import Footer from "../../components/Footer";
import SignUpHeader from "../../components/SignUpHeader"
import UsernameInput from "../../components/UsernameInput"
import RoomDropdown from "../../components/RoomDropdown"
import JoinChatBtn from "../../components/JoinChatBtn"

class LandingPage extends Component {
    // state = {
    //     name: "",
    // };

    // handleInputChange = (e) => {
    //     const { value } = e.target;
    //     console.log(value);
    //     this.setState({ name: value });

    // };

    render() {
        return (
            <div>
                <SignUpHeader />
                <UsernameInput />
                {/* // callback={this.handleInputChange} /> */}
                <RoomDropdown />
                <JoinChatBtn />
            </div>
        )

    }
}

export default LandingPage;