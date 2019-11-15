import React, { useContext } from "react";
import Card from "./Card"
import CharacterContext from '../utils/CharacterContext'
import CheckBox from './CheckBox'




const Home= () => {
    const Context= useContext(CharacterContext);
    const { state: Characters} = Context
    const { addCharacter} = Context.bunchaFunctions
    const {checkBoxStatus} = Context.bunchaFunctions
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
      console.log("Characters",Characters)
    let alphabetCharacters = [...Characters].sort(compare)
   
    console.log("Characters",Characters)
    console.log("alphaCharacters", alphabetCharacters)
      // check if any checkboxes are displayed and return a map of cards based on that
    const determineOrder = () => {
        
        if (checkBoxStatus) {
            console.log("accessing alpha")
            console.log("alpa chars", alphabetCharacters)
            return alphabetCharacters.map((character) =>  <Card key = {character.id} character = {character}/>)
            
        }
        console.log(" just accessing")
        console.log('normalChars', Characters)
        return Characters.map((character) =>  <Card key = {character.id} character = {character}/>)
       
    }
  
  
    
    
    
return(
    <div>
    <CheckBox />
    <div className="App" onClick={addCharacter}>
    {determineOrder()}
   </div>
   </div>

  );
}
 
export default Home;