import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";



export const NavBar = () => {


  return (
   
      <Navbar expand="md" >
        <Container>
          <Navbar.Brand href="/">
            <img src={''} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
}