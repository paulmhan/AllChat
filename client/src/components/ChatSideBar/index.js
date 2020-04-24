import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import RoomName from "./../RoomName"
// import UsersList from "./../UsersList"
import "./style.css";


class ChatSideBar extends Component {

    

    render(){

        return (
            <div>
                <Segment.Group id="chatroom-container">
                    <RoomName />
                        {this.props.users.map((user,index) => 
                        <Segment.Group key={index}>
                            <p>{user.name}</p>
                        </Segment.Group>)}
                </Segment.Group>
            </div>
        )
    }
}

export default ChatSideBar;