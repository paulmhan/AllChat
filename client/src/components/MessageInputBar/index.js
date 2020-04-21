import React from "react";
import { Input } from "semantic-ui-react";

const MessageInputBar = props => {
    return (
        <div>
            <Input
                action={{
                    color: "blue",
                    labelPosition: "left",
                    icon: "arrow circle up",
                    content: "Send"
                }}
                actionPosition="left"
                placeholder="Send a Message"
            />
        </div>
    )
};

export default MessageInputBar;