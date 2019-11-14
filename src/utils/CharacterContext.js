import React, { createContext, } from "react";
// default context object with properties corresponding to Provider values

const CharacterContext = React.createContext([
  {
    id: 1,
    name: "",
    powerlevel: 0,
    age: 0
  }
]);

export default CharacterContext
