import React, { useState, useContext } from "react";

const useSignUpForm = (callback) => {
  const [inputs, setInputs] = useState({
    name: '',
    powerLevel: '',
    age: ''
  });
  const handleSubmit = (event) => {
    if (event) {
        console.log(inputs)
      event.preventDefault();
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useSignUpForm