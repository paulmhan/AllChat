import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

// import Footer from "../../components/Footer";
import GetStartedBtn from "../../components/GetStartedBtn";
import LandingBodyText from "../../components/LandingBodyText"

class LandingPage extends Component {




    render() {
        return (
            <Grid container >
                <Grid.Row
                    centered
                    columns={1}>
                    <h1>Welcome to AllChat!</h1>
                </Grid.Row>
                <Grid.Row
                    centered
                    columns={1}>
                    <LandingBodyText />
                </Grid.Row>
                <Grid.Row
                    centered
                    columns={1}>
                    <GetStartedBtn />
                </Grid.Row>
                {/* <Footer /> */}
            </Grid>
        )

    }
}

export default LandingPage;