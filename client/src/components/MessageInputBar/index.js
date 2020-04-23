import React from "react";
import { Input } from "semantic-ui-react";

const MessageInputBar = props => {
    return (
        <div>
            <Input
                fluid
                action={{
                    color: "blue",
                    labelPosition: "left",
                    icon: "arrow circle up",
                    content: "Send"
                }}
                actionPosition="right"
                placeholder="Send a Message"
            />
        </div>
    )
};

export default MessageInputBar;