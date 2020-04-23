import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";

// import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import SignUpHeader from "../../components/SignUpHeader";
import UsernameInput from "../../components/UsernameInput";
import RoomDropdown from "../../components/RoomDropdown";
// import JoinChatBtn from "../../components/JoinChatBtn";

class SignUp extends Component {
    state = {
        name: "",
        room: "",
        userNameError: false,
        roomNameError: false
        
    };
    

    handleNameChange = e => {
        const { value } = e.target;
        console.log(value);
        this.setState({ name: value });
    };

    handleRoomChange = e => {
        const { value } = e.target;
        console.log(value);
        this.setState({ room: value });
    };

    checkInputs = e => {
        console.log(e);
        
        e.preventDefault();
        // console.log("I made it")
        if(!this.state.name || !this.state.room) {
            console.log("Need name and room");
            this.setState({ userNameError: true})
        } else {
            console.log("Welcome")
            this.props.history.push('/chat');
        }
        let roomNameError;
        let userNameError;

        if(this.state.name.length === 0){
            userNameError = true;
        } else {
            userNameError = false;
        }
        if(this.state.room.length === 0){
            roomNameError = true;
        } else {
            roomNameError = false;
        }
        
        console.log("User", userNameError);
        console.log("User", roomNameError);
        // Check if one is true
        // if so, we have an error. set the state
        if(userNameError || roomNameError) {
            console.log("I'm hit")
           this.setState({ userNameError, roomNameError });
        }


        //  if both are false it means no errors, set both equal to false
        if(!userNameError && !roomNameError) {
            console.log("I'm here")
            this.props.history.push(`/chat?name=${this.state.name}&room=${this.state.room}`);
        }


    }


    render() {
        console.log("Rerendering");
        return (
            <Grid container>
                <SignUpHeader />
                <UsernameInput
                    getName={this.handleNameChange}
                    name={this.state.name}
                    error={this.state.userNameError}
                />
                <RoomDropdown
                    getRoom={this.handleRoomChange}
                    name={this.state.room}
                    error={this.state.roomNameError}
                />
                {/* <Button  onClick={ (e) => this.checkInputs(e) }>Join Chat Room</Button> */}
                {/* <Link onClick={this.checkInputs} to={`/chat?name=${this.state.name}&room=${this.state.room}`}> */}
                    <button onClick={(e) => this.checkInputs(e)} className="button mt-20" type="submit"> Join Chat Room! </button>
                {/* </Link> */}
            </Grid>
        )

    }
}

export default SignUp;