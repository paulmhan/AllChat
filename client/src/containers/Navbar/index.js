import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class Navbar extends Component {
    state = { activeItem: "home" }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        return(
            <div>
                <Menu pointing secondary>
                    {/* <Link to="/"> */}
                        <Menu.Item
                        as={ Link }
                        to="/"
                        name="home"
                        active={activeItem === "home"}
                        onClick={this.handleItemClick}
                        />
                    {/* </Link> */}
                    {/* <Link to="/chat"> */}
                        <Menu.Item
                        as={ Link }
                        to="/chat"
                        name="messages"
                        active={activeItem === "messages"}
                        onClick={this.handleItemClick}
                        />
                    {/* </Link> */}
                    {/* <Link to="/signup">
                        <Menu.Item
                        name="sign up"
                        active={activeItem === "signup"}
                        onClick={this.handleItemClick}
                        />
                    </Link> */}
                </Menu>
            </div>
        );
    }
};