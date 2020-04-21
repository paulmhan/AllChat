import React, { Component } from "react";
import { Input } from "semantic-ui-react";

class UsernameInput extends Component {

    hello = () => {
        {this.props.callback()};
    }

    render(){
        return <Input placeholder="Enter You Name Here"/>
    }
}
    
export default UsernameInput;