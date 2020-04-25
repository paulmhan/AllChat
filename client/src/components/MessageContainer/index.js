import React from "react";
import { Segment } from "semantic-ui-react";
import "./style.css";

const MessageContainer = props => {
  return (
    <div className="ui message">
      {props.messages.map((message, index) =>
        <Segment key={index}>
          <p>
            <span>{message.timeStamp}</span>
          </p>
          <p>{message.name}: {message.title}</p>
        </Segment>)}
    </div>
  )
}

export default MessageContainer;