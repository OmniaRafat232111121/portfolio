import React from "react";
import { useState,useEffect } from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

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
 