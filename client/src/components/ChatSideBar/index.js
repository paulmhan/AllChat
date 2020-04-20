import React from "react";
import RoomName from "./../RoomName"
import UsersList from "./../UsersList"


const ChatSideBar = props => {
    render(
        <div>
            <RoomName />
            <UsersList />
        </div>
    );
}

export default ChatSideBar;