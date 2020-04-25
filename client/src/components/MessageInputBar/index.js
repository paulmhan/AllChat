import React from "react";
import { Input } from "semantic-ui-react";


const MessageInputBar = props => {
    return (
        <div>
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
                }}
                placeholder={props.placeholder}
            />
        </div>
    )
};

export default MessageInputBar;


// {/* <Form >
//                 <Form.Field
//                     error={props.error}
//                     value={props.message}
//                     required
//                     placeholder={props.placeholder}
//                     control='input'
//                     onChange={props.getMessage}
//                 />
//             </Form>
//             <Button onClick={props.handleSend} primary type="submit">
//                 Send
//             </Button> */}