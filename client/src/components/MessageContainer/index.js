import React from "react";

import "./style.css";

const MessageContainer = props => {
  return (
    <div className="ui message">
      <p>
        User1 <span>9:15am</span>
      </p>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </div>
  )
}

export default MessageContainer;