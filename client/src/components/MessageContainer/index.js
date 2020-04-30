import React, { Component } from "react";
import { Segment } from "semantic-ui-react";


import "./style.css";

class MessageContainer extends Component {


  render() {
    return (
      <div className="message-outline">
        <div className="ui message" id="message-container">
          {this.props.messages.map((message, index) =>
            <Segment key={index}>
              <p>
                <span>{message.timeStamp}</span>
              </p>
              <p>{message.name}: {message.title}</p>
            </Segment>)}
        </div>
      </div>
    )
  }
};

export default MessageContainer;


// const MessageContainer = props => {
//   return (
//     <div className="message-outline">
//       <div className="ui message">
//         {props.messages.map((message, index) =>
//           <Segment key={index}>
//             <p>
//               <span>{message.timeStamp}</span>
//             </p>
//             <p>{message.name}: {message.title}</p>
//           </Segment>)}
//       </div>
//     </div>
//   )
// }