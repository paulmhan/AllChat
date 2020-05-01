import React from "react";
import { Grid } from "semantic-ui-react";

import "./style.css";

const LandingBodyText = props => {
    return(
        <Grid id="body-text-grid">
            <Grid.Row centered>
                <Grid.Column id="header" width={6}>
                    <h1>Bring People Together</h1>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                 <Grid.Column id="text1" width={8}>
                    <h3>As communication continues to increase on a global scale, so too does the demand for quick, reliable translation.</h3>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column id="text2" width={8}>
                    <h3>With AllChat, you can talk to anyone across the world, even if you don't speak their language!</h3>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default LandingBodyText;