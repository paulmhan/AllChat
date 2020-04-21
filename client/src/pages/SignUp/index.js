import React, { Component } from "react";
// import Footer from "../../components/Footer";
import SignUpHeader from "../../components/SignUpHeader"
import UsernameInput from "../../components/UsernameInput"
import RoomDropdown from "../../components/RoomDropdown"
import JoinChatBtn from "../../components/JoinChatBtn"

class LandingPage extends Component {

    render() {
        return (
            <div>
                <SignUpHeader />
                <UsernameInput />
                <RoomDropdown />
                <JoinChatBtn />
                {/* <Footer /> */}
            </div>
        )

    }
}

export default LandingPage;