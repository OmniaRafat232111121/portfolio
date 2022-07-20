import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project_img1.jpg";
import projImg2 from "../assets/img/project_img2.png;
import projImg3 from "../assets/img/project-img3.png;
const Projects = () => {
  
const projects = [

    {
      title: "Landing Page",
      description: "Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
   <section className="project" id="project">
   <Container>
   <Row>
   <COl size={12}>
   <h2>Projects</h2>
   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
     <Tab.Content >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <p>{project.title}</p>
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
          
        </COl>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
  
export default Projects
