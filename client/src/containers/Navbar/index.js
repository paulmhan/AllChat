import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
export default class Navbar extends Component {
    state = { 
        activeItem: "home" 
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    render() {
        const { activeItem } = this.state;
        return(
            <div>
                <Menu pointing secondary>
                    
                        <Menu.Item
                        as={ Link }
                        to="/"
                        name="home"
                        active={activeItem === "home"}
                        onClick={this.handleItemClick}
                        />
        
                        <Menu.Item
                        as={ Link }
                        to="/signup"
                        name="sign up"
                        active={activeItem === "signup"}
                        onClick={this.handleItemClick}
                        />
                </Menu>
            </div>
        );
    }
};