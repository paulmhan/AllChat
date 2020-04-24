import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import LandingBodyText from "../../components/LandingBodyText"
import SignUpForm from "../../containers/SignUpForm";

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
                    <SignUpForm socket={this.props.socket}/>
                </Grid.Row>
            </Grid>
        )

    }
}

export default LandingPage;