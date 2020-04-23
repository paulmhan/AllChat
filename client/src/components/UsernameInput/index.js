import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class UsernameInput extends Component {
  
  componentDidUpdate(prevProps) {
    return prevProps.name !== this.props.name;
  }
    render(){
        return (
        <Form >
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


