import React, { useState } from "react";
import Card from "./components/Card"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
    
    <div className="App">
     {state.map((character) => { return <Card key = {character.id} character = {character}/>})}
   
     
    
    </div>
  );
}


export default App;


