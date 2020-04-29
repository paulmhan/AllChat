import React from "react";
import { Input } from "semantic-ui-react";


const MessageInputBar = props => {
    return (
        <div>
            {/* <Form >
            <Form.Field
                error={props.error}
                value={props.message}
                required
                placeholder={props.placeholder}
                control='input'
                onChange={props.getMessage}
            />
        <Button onClick={props.handleSend} primary type="submit">
            Send
        </Button>
        </Form> */}
            <Input
                fluid
                error={props.error}
                value={props.message}
                onChange={props.getMessage}
                action={{
                    color: "blue",
                    labelPosition: "right",
                    icon: "arrow circle up",
                    content: "Send",
                    onClick: props.handleSend
                }}
                placeholder={props.placeholder}
            />

        </div>
    )
};

export default MessageInputBar;



