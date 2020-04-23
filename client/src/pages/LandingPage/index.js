import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
<<<<<<< HEAD

// import Footer from "../../components/Footer";
// import GetStartedBtn from "../../components/GetStartedBtn";
import LandingBodyText from "../../components/LandingBodyText"
import SignUpForm from "../../containers/SignUpForm";
=======
import GetStartedBtn from "../../components/GetStartedBtn";
import LandingBodyText from "../../components/LandingBodyText";
>>>>>>> 22b01b78c92d84f74b1f6d437e879c10c3d2841d

class LandingPage extends Component {




    render() {
        return (
<<<<<<< HEAD
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
                    <SignUpForm />
                </Grid.Row>
                {/* <Footer /> */}
=======
            <Grid container>
                <h1>Welcome to AllChat!</h1>
                <LandingBodyText />
                <GetStartedBtn />
>>>>>>> 22b01b78c92d84f74b1f6d437e879c10c3d2841d
            </Grid>
        )

    }
}

export default LandingPage;