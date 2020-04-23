import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import GetStartedBtn from "../../components/GetStartedBtn";
import LandingBodyText from "../../components/LandingBodyText";

class LandingPage extends Component {
    



    render() {
        return (
            <Grid container>
                <h1>Welcome to AllChat!</h1>
                <LandingBodyText />
                <GetStartedBtn />
            </Grid>
        )

    }
}

export default LandingPage;