import React from "react";
import { Segment } from "semantic-ui-react";

import RoomName from "./../RoomName"
import UsersList from "./../UsersList"

const ChatSideBar = props => {
    return (
        <div>
            <Segment.Group>
                <RoomName />
                <UsersList />
            </Segment.Group>
        </div>
    )
}

export default ChatSideBar;