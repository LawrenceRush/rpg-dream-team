import React, { useContext } from "react";
import Card from "./Card"
import CharacterContext from '../utils/CharacterContext'
import AlphaCheckBox from './AlphaCheckBox'
import FilterPowerCheckBox from './FilterPowerCheckBox'
import DropDown from './DropDown'
import './../css/homePage.css'





const Home= () => {
    const Context= useContext(CharacterContext);
    const { state: Characters} = Context
    const {alphaCheckBoxStatus} = Context.bunchaFunctions
    const {filterPowerCheckBoxStatus} = Context.bunchaFunctions
    const {powerLevelFilter} = Context.bunchaFunctions

   //Sort the funtion Aphabetically
    
 
  
    const compare = (a, b) => {
        // Use toUpperCase() to ignore character casing
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        
      
        let comparison = 0;
        if (nameA > nameB) {
          comparison = 1;
        } else if (nameA < nameB) {
          comparison = -1;
        }
        return comparison;
      }
     
    let alphabetCharacters = [...Characters].sort(compare)
    var filteredCharacters  =  Characters.filter(character => {
    return character.powerlevel > powerLevelFilter
    });
    
    
   
 
      // check if any checkboxes are displayed and return a map of cards based on that
    const determineOrder = () => {
      if (filterPowerCheckBoxStatus) {
        console.log('working')
        console.log(filteredCharacters)
        
        return filteredCharacters.map((character) =>  <Card key = {character.id} character = {character}/>)
    }
        if (alphaCheckBoxStatus) {
            return alphabetCharacters.map((character) =>  <Card key = {character.id} character = {character}/>)
        }
       return Characters.map((character) =>  <Card key = {character.id} character = {character}/>)
    }
return(
    <div>
      <div  className = "filterDiv">Filter 
      <span className = "filterStuff"> <FilterPowerCheckBox /> By: <DropDown/></span>
      
    </div>
    <div className = "sortDiv">Sort by alphabet
    <AlphaCheckBox />
      </div>
    <div className="App" >
    {determineOrder()}
   </div>
   </div>

  );
}
 
export default Home;