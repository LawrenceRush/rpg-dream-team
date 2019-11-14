import React, { useContext } from "react";
import Card from "./Card"
import CharacterContext from '../utils/CharacterContext'



const Home= () => {
    const Context= useContext(CharacterContext);
    const { state: Characters} = Context
    const { addCharacter} = Context
    
    
    
return(
    <div className="App" onClick={addCharacter}>
    {Characters.map((character) =>  <Card key = {character.id} character = {character}/>)}
   </div>

  );
}
 
export default Home;