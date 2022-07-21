import React from 'react'
import {useState} from 'react'
import { Container,Col,Row } from 'react-bootstrap';
import ContactImg from '../assets/img/contact-img.svg'
const Contact = () => {
const formInitiaDetails={
    firstName:'',
    lastName:'',
    email:'',
    phoe:'',
    message:'',
}
const onFormUpdate=(category,value)=>{
    setFormDetails({
        ...formDetails,
        [category]:value
    })
}
const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitiaDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };
const [formDetails,setFormDetails]=useState(formInitiaDetails);
const [buttonText,setButtonText]=useState('send');
const [status,setStatus]=useState({});
  return (

  )
}

export default Contact