import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import UsersTitle from "../UsersTitle";
import "./style.css";


class ChatSideBar extends Component {

    

    render(){

        return (
            <div>
                <Segment.Group id="chatroom-interface">
                    <UsersTitle />
                        {this.props.users.map((user,index) => 
                        <Segment.Group key={index}>
                            <Segment>{user.name}</Segment>
                        </Segment.Group>)}
                </Segment.Group>
            </div>
        )
    }
}

export default ChatSideBar;