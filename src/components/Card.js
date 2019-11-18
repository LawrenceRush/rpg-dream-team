import React, { useState } from "react";
import Card from 'react-bootstrap/Card'



function createCard(characterParam) {
  
  var {name} = characterParam.character
  var {powerlevel} =characterParam.character
  var {age} = characterParam.character
 
  return (

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>Power Level: {powerlevel}</Card.Text>
    <Card.Text>Age: {age}</Card.Text>
    
  </Card.Body>
</Card>
  );
}
 
export default createCard;
