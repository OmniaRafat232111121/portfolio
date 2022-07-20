import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ProjImg1 from "../assets/img/project_img1.jpg";
import ProjImg2 from "../assets/img/project_img2.png";
import ProjImg3 from "../assets/img/project_img3.png";
import ProjImg4 from '../assets/img/Project_img4.png'
import ProjImg5 from "../assets/img/project_img5.png";
import ProjImg6 from "../assets/img/project_img6.png";
import ProjImg7 from "../assets/img/project_img7.png";
import ProjImg8 from "../assets/img/project_img8.png";
import ProjectCard from './ProjectCard';
const Projects = () => {
  
const projects = [

    {
      title: "Landing Page",
      description: "Development",
      imgUrl: ProjImg1,
    
    },
    {
      title: "Sunny Summer",
      description: " Development",
      imgUrl: ProjImg2,
    },
    {
      title: "Healthy&tasty",
      description: "Development",
      imgUrl: ProjImg3,
    },
    {
      title: "Blog",
      description: "Development",
      imgUrl: ProjImg4,
    },
    {
      title: "FitnessGym",
      description: "Design & Development",
      imgUrl: ProjImg5,
    },
    {
      title: "Resturant",
      description: "Design & Development",
      imgUrl: ProjImg6,
    },
    {
        title: "Furniture room",
        description: "Development",
        imgUrl: ProjImg7,
      },
      {
        title: "Food",
        description: "Development",
        imgUrl: ProjImg8,
      },
  ];
  return (
   <section className="project" id="project">
   <Container>
   <Row>
   <Col size={12}>
  
     <div>
       <h2>Projects</h2>
       <p>I enjoy every step of the developement process, from discussion and collaboration to concept and execution</p>
       <Tab.Container id="projects-tabs" defaultActiveKey="first">
         <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
           <Nav.Item>
             <Nav.Link eventKey="first">Tab 1</Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link eventKey="second">Tab 2</Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link eventKey="third">Tab 3</Nav.Link>
           </Nav.Item>
         </Nav>
         <Tab.Content id="slideInUp" >
           <Tab.Pane eventKey="first">
             <Row>
               {
                 projects.map((project, index) => {
                   return (
                     <ProjectCard
                       key={index}
                       {...project}
                       />
                   )
                 })
               }
             </Row>
           </Tab.Pane>
           <Tab.Pane eventKey="section">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
           </Tab.Pane>
           <Tab.Pane eventKey="third">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
           </Tab.Pane>
         </Tab.Content>
       </Tab.Container>
     </div>
 
 </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
  
export default Projects
