
import React, { useState } from "react";
import {Container,Row,Col} from'react-bootstrap'
import { MultiSelect } from "react-multi-select-component";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
const skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
 <section className="skill" id='skills'>
 <Container>
 <Row>
 <Col>
<div classname="skill-bx">
<h2> Skills</h2>
<p>You Can Imagine,
I Can Do !
I have built more than 20 websites for practise myself, Excellent time management and organisational skills</p>
<Carousel responsive={responsive} infinite={true} className="skill-slider">
<div className="item">
<img src={meter1} alt="Image" />
<h5>Front-end Develoer</h5>
</div>


<div className="item">
<img src={meter3} alt="Image" />
<h5>Back-end Develoer</h5>
<p>laravel</p>
</div>


<div className="item">
<img src={meter2} alt="Image" />
<h5>we</h5>
<p>React js</p>
</div>

</Carousel>
</div>
 </Col>
 </Row>
 </Container>

 </section>
  )
}

export default skills