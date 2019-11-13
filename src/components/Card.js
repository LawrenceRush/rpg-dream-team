import React, { useState } from "react";



function Card(characterParam) {
  
  var {name} = characterParam.character
  var {powerlevel} =characterParam.character
  var {age} = characterParam.character
 
  return (
    <div className="Card">
     <div>Name: {name} </div>
    <div>Power Level: {powerlevel}</div>
     <div>Age: {age} </div>
</div>
  );
}
 
export default Card;
