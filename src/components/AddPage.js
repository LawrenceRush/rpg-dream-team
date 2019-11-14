import React, { useState, useContext } from "react";
import useSignUpForm from '../utils/CustomHooks';
import CharacterContext from '../utils/CharacterContext'

function Add() {
  const Context = useContext(CharacterContext)
  const{handleInputChange, handleSubmit, obj} = Context
  
return(
  <form onSubmit={handleSubmit}>
  <label>Name</label>
  <input  name="name" type="text" onChange={handleInputChange} value={obj.name} required/>
  <label>powerLevel</label>
  <input  name="powerlevel" type="text" onChange={handleInputChange} value={obj.powerlevel} required/>
  <label>age</label>
  <input  name="age" type="text" onChange={handleInputChange} value={obj.age} required/>
  <button type="submit">Add</button>
</form>
  );
}
 
export default Add;
