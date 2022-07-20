import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";



export const NavBar = () => {


  return (
   
      <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
        <img  src={""} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Skill">Skill</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            
          </Nav>
          <span className="nabar-text">
            <div className="socia">
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    
  )
}