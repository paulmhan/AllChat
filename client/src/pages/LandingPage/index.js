import React, { Component } from "react";
// import Footer from "../../components/Footer";
import GetStartedBtn from "../../components/GetStartedBtn";
import LandingBodyText from "../../components/LandingBodyText"

class LandingPage extends Component {
    



    render() {
        return (
            <div>
                <h1>Welcome to AllChat!</h1>
                <LandingBodyText />
                <GetStartedBtn />
                {/* <Footer /> */}
            </div>
        )

    }
}

export default LandingPage;