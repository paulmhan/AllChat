import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "../../containers/Navbar/index"
import LandingPage from "../../pages/LandingPage";
import Chat from "../../pages/Chat";
import io from "socket.io-client"

const socket = io();

socket.emit("connection", {name:"hello"})

const App = props => (
  <Router>
    <div className="container">
      <Navbar/>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/chat" component={Chat}/>
    </div>
  </Router>
);
export default App;