import React, { useState } from "react";
import useSignUpForm from '../components/CustomHooks';





function Add() {

    const signup = () => {
        alert(`User Created!
               Name: ${inputs.name} ${inputs.powerLevel}
               Email: ${inputs.age}`);
      }
    
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);

return(
  <form onSubmit={handleSubmit}>
  <label>Name</label>
  <input  name="name" type="text" onChange={handleInputChange} value={inputs.name} required/>
  <label>powerLevel</label>
  <input  name="powerLevel" type="text" onChange={handleInputChange} value={inputs.powerLevel} required/>
  <label>age</label>
  <input  name="age" type="text" onChange={handleInputChange} value={inputs.age} required/>
  <button type="submit">Add</button>
</form>
  );
}
 
export default Add;
