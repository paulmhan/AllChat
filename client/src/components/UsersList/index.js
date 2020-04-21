import React from "react";
import { Segment } from "semantic-ui-react";

const UserList = props => {
    return(
    <Segment.Group>
        <Segment>User 1</Segment>
        <Segment>User 2</Segment>
        <Segment>User 3</Segment>
        <Segment>User 4</Segment>
    </Segment.Group>
    );
}

export default UserList;