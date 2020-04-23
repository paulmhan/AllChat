import React, { Component } from "react";
import { Input } from "semantic-ui-react";

class UsernameInput extends Component {

    render() {
        return <Input onChange={this.props.getName} placeholder="Enter You Name Here" />
    }
}

export default UsernameInput;