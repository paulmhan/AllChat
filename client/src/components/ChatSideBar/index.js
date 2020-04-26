import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import RoomName from "./../RoomName"
// import UsersList from "./../UsersList"
import "./style.css";


class ChatSideBar extends Component {

    

    render(){

        return (
            <div>
                <Segment.Group id="chatroom-interface">
                    <RoomName />
                        {this.props.users.map((user,index) => 
                        // console.log(user.name);
                        <Segment.Group key={index}>
                            <Segment>{user.name}</Segment>
                        </Segment.Group>)}
                    <Segment>Dummy Segment</Segment>
                </Segment.Group>
            </div>
        )
    }
}

export default ChatSideBar;