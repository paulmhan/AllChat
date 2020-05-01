import React from "react";
import { Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const LeaveBtn = props => {

    return(
        <div>
            <Button onClick={() => props.history.push("/")}>Leave</Button>

        </div>
    )
}

export default withRouter(LeaveBtn);