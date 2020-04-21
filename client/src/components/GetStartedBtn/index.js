import React from "react";
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const GetStartedBtn = props => {
    let history = useHistory();
    return(
        <Button onClick={() => history.push("/signup")}>Get Started</Button>
    );
}

export default GetStartedBtn;