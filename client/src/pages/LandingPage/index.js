import React, { Component } from "react";

import Footer from "../../components/Footer/index";
import GetStartedBtn from "../../components/GetStartedBtn/index";

class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to AllChat!</h1>
                <GetStartedBtn/>
                <Footer/>
            </div>
        )

    }
}

export default LandingPage;