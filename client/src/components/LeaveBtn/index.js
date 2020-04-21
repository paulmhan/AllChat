import React from "react";
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const LeaveBtn = props => {
    let history = useHistory();

    return(
        <div>
            <Button onClick={() => history.push("/")}>Leave</Button>

        </div>
    )
}

export default LeaveBtn;