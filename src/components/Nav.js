import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {
    //I realize some of these aren't used in this file, but not including them takes away Nav-link functionality
    BrowserRouter as Router, Switch, Link
  } from "react-router-dom";
function makeNav (){
return(
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Character Roster</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/Add">Add</Link></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
)
}

export default makeNav