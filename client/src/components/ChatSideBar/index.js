import React from "react";
import { Segment } from "semantic-ui-react";

import RoomName from "./../RoomName"
import UsersList from "./../UsersList"
import "./style.css";

const ChatSideBar = props => {
    return (
        <div>
            <Segment.Group id="chatroom-container">
                <RoomName />
                <Segment.Group>
                    <UsersList />
                </Segment.Group>
            </Segment.Group>
        </div>
    )
}

export default ChatSideBar;