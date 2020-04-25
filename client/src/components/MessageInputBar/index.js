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
//                     
//                     
//                     required
//                     
//                     control='input'
//                     
//                 />
//             </Form>
//             <Button  primary type="submit">
//                 Send
//             </Button> */}