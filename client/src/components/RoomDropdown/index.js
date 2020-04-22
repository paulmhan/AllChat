import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
class RoomDropdown extends Component {
    

    render(){
        const chatRoomOptions = [
            {key: "ch1", value:"ch1", text: "Chatroom 1"},
            {key: "ch2", value:"ch2", text: "Chatroom 2"},
            {key: "ch3", value:"ch3", text: "Chatroom 3"},
            {key: "ch4", value:"ch4", text: "Chatroom 4"}
        ]  

        return(
            <Dropdown 
                placeholder="Select a chatroom"
                fluid
                search
                selection
                options={chatRoomOptions}
                // value={value}
            />
        )

        
    }
}
    
export default RoomDropdown;