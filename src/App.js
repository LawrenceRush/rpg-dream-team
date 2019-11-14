import React, { useState } from "react";
import Card from "./components/Card"
import Home from './components/HomePage'
import Add from './components/AddPage'
import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";

function App() {
  const [state, setState] = useState([{
    id: 1,
    name: "Lawrence",
    powerlevel: 9000,
    age: 24
  },
{
    id: 2,
    name: "Pam",
    powerlevel: 9000,
    age: 24
  }]); 
  
  return (
    <div>
    <Router>
    <div>
      <nav>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/Add">Add</Link> </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/Add"> <Add /> </Route>
        <Route path="/"> <Home characters= {state}/> </Route>
      </Switch>
    </div>
  </Router>
  </div>
  );
}


export default App;


