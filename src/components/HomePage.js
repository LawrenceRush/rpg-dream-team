import React, { useState } from "react";
import Card from "./Card"



function Home(charactersParam) {
   
    let characters = charactersParam.characters
return(
    <div className="App">
    {characters.map((character) => { return <Card key = {character.id} character = {character}/>})}
   </div>

  );
}
 
export default Home;