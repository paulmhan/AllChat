import React, { Component }from "react";
import { Accordion, Icon } from "semantic-ui-react";

import RoomName from "./../RoomName"
import UsersList from "./../UsersList"

export default class ChatSideBar extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex });
    }
    
    render() {
        const { activeIndex } = this.state;

        return(<Accordion fluid styled>
            <Accordion.Title 
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
            >
            <Icon name="dropdown"/>
            Chatrooms
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
                <RoomName />
            </Accordion.Content>

            <Accordion.Title 
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
            >
            <Icon name="dropdown"/>
            Users
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
                <UsersList />
            </Accordion.Content>
        </Accordion>
        )
    }
};