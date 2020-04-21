import React from "react";
import { Segment } from "semantic-ui-react";

const RoomName = props => {
    return(
    <Segment.Group>
        <Segment>Chatroom 1</Segment>
        <Segment>Chatroom 2</Segment>
        <Segment>Chatroom 3</Segment>
        <Segment>Chatroom 4</Segment>
    </Segment.Group>
    );
};

export default RoomName;