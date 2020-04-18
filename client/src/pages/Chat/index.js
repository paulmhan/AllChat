import React, { Component } from 'react';
import Navbar from "../../containers/Navbar/index";
import Footer from "../../components/Footer/index"; 

class Chat extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1>*Insert Chat Room Here*</h1>
                <Footer/>
            </div>
        )

    }
}

export default Chat;