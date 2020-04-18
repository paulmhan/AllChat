import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "../../pages/LandingPage";
import Chat from "../../pages/Chat";

const App = props => (
  <Router>
    <div className="container">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/chat" component={Chat}/>
    </div>
  </Router>
);
export default App;