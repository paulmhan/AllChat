import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.ListeningStateChangedEvent({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return(
            <div>
                <Menu pointing secondary>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </div>
        )
    }
};