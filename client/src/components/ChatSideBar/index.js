import React from "react";
import RoomName from "./../RoomName"
import UsersList from "./../UsersList"


const ChatSideBar = props => {
    return(
        <div>
            <RoomName />
            <UsersList />
        </div>
    );
}

export default ChatSideBar;