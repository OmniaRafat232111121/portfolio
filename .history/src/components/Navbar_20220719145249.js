import React from "react";
import { useState,useEffect } from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";

import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon.svg'
import navIcon3 from '../assets/img/nav-icon1.svg'
export const NavBar = () => {
const [activeLink,setActiveLink]=useState('home');
const [scrolled,setScrolled]=useState('false');
useEffect(()=>{
const onScroll=()=>{
  if(window.scrollY>50){
    setScrolled(true);
  }
  else{
    setScrolled(false);
  }
}
window.addEventListener('scroll',onScroll);
return()=>window.removeEventListener('scroll',onScroll)
},[])
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
            <div className="social-icon">
            <a href="#"><img  src={} alt=""/></a>
            <a href="#"><img  src={} alt=""/></a>
            <a href="#"><img  src={} alt=""/></a>
            </div>
            <button className="vvd" onClick={()=>console.log('connect')}> 
            <span>lets connect</span></span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    
  )
}