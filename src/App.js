import React, { useState } from "react";
import Card from "./components/Card"
import Home from './components/HomePage'
import Add from './components/AddPage'
import Nav from "./components/Nav"
import './App.css';
import ChatacterContext from './utils/CharacterContext'
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

function App() {
  const [state, setState] = useState([{
    id: 1,
    name: "Lawrence",
    powerlevel: 9000,
    age: 24
  }]);

  const [obj, setobj] = useState({
    id: 2,
    name: "",
    powerlevel: "",
    age: ""
  });

  const addCharacter = () => {
     setState([...state, obj])
    console.log(state)
  }
  

  const handleSubmit = (event) => {
    if (event) {
      addCharacter()
      event.preventDefault();
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setobj(Obj => ({...Obj, [event.target.name]: event.target.value}));
  }
  return (

    <ChatacterContext.Provider value={{ state, addCharacter: addCharacter, handleInputChange: handleInputChange, handleSubmit,obj }}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/Add"> <Add /> </Route>
          <Route path="/"> <Home /> </Route>
        </Switch>
      </Router>
    </ChatacterContext.Provider>
  );
}


export default App;


