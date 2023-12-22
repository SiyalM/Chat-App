import React, { useContext } from 'react';
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from './context/auth-context'; 
import Login from './Components/Login/Login';



function App() {
  const authContext = useContext(AuthContext);
  
  return (
    <div className="app">
        { !authContext.user ? (
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
