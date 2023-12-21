import React, { useState } from 'react';
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useStateValue } from './StateProvider';
import Login from './Components/Login/Login';



function App() {
  return (
    <div className="app">
       { !user ? (
        <Login/>
      ): (
        <div className="app__body">
          <Router>
              <Sidebar/>
              <Switch>
                  <Route path="/rooms/:roomId">
                      <Chat/>
                  </Route>
                  <Route path="/">
                      <Chat/>
                  </Route>
              </Switch>
          </Router>

        </div>
      )}  
    </div>
  );
}

export default App;
