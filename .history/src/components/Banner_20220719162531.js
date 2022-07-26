import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
        <span className="tagline"> Welcome to my Portfolio</span>
       <h1>{`Hi! I'm Omnia`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "frot-end Developer", "Back-end Developerr" ]'><span className="wrap"></span></span></h1>

       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       <button >Lets Connect</button>
       </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner