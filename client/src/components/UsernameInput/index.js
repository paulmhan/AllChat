import React, { Component } from "react";
import { Input, Form, Message } from "semantic-ui-react";

class UsernameInput extends Component {
  
  componentDidUpdate(prevProps) {
    return prevProps.name !== this.props.name;
  }
    render(){
      console.log(this.props);
        // return <Input onChange={this.props.getName} placeholder="Enter You Name Here"/>
        return (<Form >
        <Form.Field 
          error={ this.props.error } 
          required
          label='User Name'
          placeholder='Enter your username'
          control='input'
          onChange={this.props.getName}
          />
      </Form>
      )  
    }
}
    
export default UsernameInput;


