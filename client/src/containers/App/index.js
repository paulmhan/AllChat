import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import Chat from "../../pages/Chat";
import io from "socket.io-client";
import AllChatTitle from "../../components/AllChatTitle";



class App extends Component {

  state = {
    socket: io()
  }

  render() {

    return (
      <Router>
        <div className="container">
          <AllChatTitle />
        </div>
        <br />
        <Route exact path="/" render={() => <LandingPage socket={this.state.socket} />} />
        <Route path="/chat" render={() => <Chat socket={this.state.socket} />} />
      </Router>
    );
  }

}
export default App;