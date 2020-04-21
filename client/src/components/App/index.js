import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../../containers/Navbar/index"
import LandingPage from "../../pages/LandingPage";
import Chat from "../../pages/Chat";
import io from "socket.io-client";
import SignUp from "../../pages/SignUp";

const socket = io("http://localhost:3001");

socket.emit("connection", {name:"hello"})

const App = props => (

  <Router>
    <div className="container">
      <Navbar/>
      <Route exact path ="/" render = {()=>  <LandingPage />}/>
      <Route exact path ="/signup" render = {()=>  <SignUp />}/>
      <Route exact path ="/chat" render = {()=>  <Chat />}/>
    </div>
  </Router>
);
export default App;