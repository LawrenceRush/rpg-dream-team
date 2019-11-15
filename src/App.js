import React, { useState } from "react";
import Card from "./components/Card"
import Home from './components/HomePage'
import Add from './components/AddPage'
import Nav from "./components/Nav"
import './App.css';
import CharacterContext from './utils/CharacterContext'
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

  const [checkBoxStatus, setCheckBoxStatus] = useState(
    false
  )

  const [index, SetIndex] = useState(
    3
  )

  

  const addCharacter = () => {
    console.log(obj)
     setState([...state, obj])
     SetIndex(index+1)
  }
  

  const handleSubmit = (event) => {
    if (event) {
      addCharacter()
      event.preventDefault();
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setobj(Obj => ({...Obj, id:index, [event.target.name]: event.target.value}));
  }

  const handleCheckBox = () => {(setCheckBoxStatus(!checkBoxStatus))
  }

  const bunchaFunctions = {
    addCharacter,  
    handleInputChange,
     handleSubmit,
     obj, 
     checkBoxStatus,
     handleCheckBox
    
  }
  return (

    <CharacterContext.Provider value={{ state, bunchaFunctions}}>
      <Router>
        <Nav />
        
        <Switch>
          <Route path="/Add"> <Add /> </Route>
          <Route path="/"> <Home /> </Route>
        </Switch>
      </Router>
    </CharacterContext.Provider>
  );
}


export default App;


