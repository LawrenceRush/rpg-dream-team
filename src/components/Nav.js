import React from "react";
import {
    //I realize some of these aren't used in this file, but not including them takes away Nav-link functionality
    BrowserRouter as Router, Switch, Link
  } from "react-router-dom";
function Nav (){
return(
    <nav>
    <ul>
      <li> <Link to="/">Home</Link> </li>
      <li> <Link to="/Add">Add</Link> </li>
    </ul>
  </nav>
)
}

export default Nav