import React,{useState,useEffect} from 'react'
import headerImg from '../assets/img/header-img.svg'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Container, Row, Col } from "react-bootstrap";
const Banner = () => {
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleteing]=useState(false);
    const toRotate=['Front-end Developer','back-end Developer'];
    const[text,setText]=useState(' ');
    let[delta,setDelta]=useState(300-Math.random()*100);
    const period=2000;
    useEffect(()=>{
    let ticker=setInterval(()=>{
        ticker();
    },delta) ;
    //clean up reduce memory leak
    return()=>{clearInterval(ticker)};
    },[text])


    const tick=()=>{
        let i=loopNum%toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDeleting ?fullText.substring(0,text.length-1):fullText.substring(0, text.length + 1);
  
     setText(updatedText);
     if(isDeleting){
        setDelta()
     }
    }
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
        <Col  xs={12} md={6} xl={7} >
        <span className="tagline"> Welcome to my Portfolio</span>
       <h1>{`Hi! I'm Omnia`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "frot-end Developer", "Back-end Developerr" ]'><span className="wrap"></span></span></h1>

       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       <button onClick={()=>console.log('connect')}>Lets Connect  <ArrowRightCircle  size={23}/></button>
       </Col>
       <Col xs={12} md={6} xl={5}>
         <img src={headerImg} alt="Header Img" />
       </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner