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
const [alphaCheckBoxStatus, setAlphaCheckBoxStatus] = useState(false)
const [filterPowerCheckBoxStatus, setFilterPowerCheckBoxStatus] = useState(false)
const [index, SetIndex] = useState(3)
const [powerLevelFilter, setPowerLevelFilter] = useState(0)

  

  const addCharacter = () => {
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
    setobj(Obj => ({
      ...Obj, id:index, [event.target.name]:  (parseInt(event.target.value) ? parseInt(event.target.value) : event.target.value)
  }))}

  const handleAlphaCheckBox = () => {(setAlphaCheckBoxStatus(!alphaCheckBoxStatus))}
  const handleFilterPowerCheckBox = () => {(setFilterPowerCheckBoxStatus(!filterPowerCheckBoxStatus))}
  const handlePowerLevelFilter = (event) => {(setPowerLevelFilter(parseInt(event.target.value)))}

  const bunchaFunctions = {
    addCharacter,  
    handleInputChange,
     handleSubmit,
     obj, 
     alphaCheckBoxStatus,
     filterPowerCheckBoxStatus,
     handleAlphaCheckBox,
     handleFilterPowerCheckBox,
     powerLevelFilter, 
     handlePowerLevelFilter
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


