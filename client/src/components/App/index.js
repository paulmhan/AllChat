import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "../../containers/Navbar/index"
import LandingPage from "../../pages/LandingPage";
import Chat from "../../pages/Chat";
import io from "socket.io-client";
import AllChatTitle from "../AllChatTitle";

const socket = io();


const App = props => (
  <Router>
    <div className="container">
      <AllChatTitle />
    </div>
    <br />
    <Route exact path="/" render={() => <LandingPage socket={socket}/>} />
    <Route path="/chat" render={() => <Chat socket={socket}/>} />
  </Router>
);
export default App;