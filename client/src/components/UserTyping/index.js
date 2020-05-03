import React from "react";
import "./style.css";

const UserTyping = props => {
    return(
        <div>
           <h5 id="typing">{props.name} </h5>
        </div>
    )
}

export default UserTyping;