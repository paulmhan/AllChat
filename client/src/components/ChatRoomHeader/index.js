import React from "react";


const ChatRoomHeader = props => {
    return(
        <div>
            {/* <h1>{props.room}</h1> */}
           <h1>Hi {props.name}!</h1>
        </div>
    )
}

export default ChatRoomHeader;