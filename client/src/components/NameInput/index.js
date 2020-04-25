import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class NameInput extends Component {
  
  componentDidUpdate(prevProps) {
    return prevProps.name !== this.props.name;
  }
    render(){
        return (
        <Form >
        <Form.Field 
          error={ this.props.error } 
          required
          label='Name'
          placeholder='Enter your name'
          control='input'
          onChange={this.props.getName}
          />
      </Form>
      )  
    }
}
    
export default NameInput;


