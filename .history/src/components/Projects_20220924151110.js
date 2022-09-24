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
import ProjImg9 from "../assets/img/project_image9.png";
import ProjImg10 from "../assets/img/project_img10.png";
import ProjImg11 from "../assets/img/project_image11.png";
import ProjImg12 from "../assets/img/project_image12.png";
import ProjImg13 from "../assets/img/project_image13.jpg";
import ProjImg14 from "../assets/img/project_image14.jpg.png";
import ProjImg15 from "../assets/img/ProjImg15.png";
import ProjImg16 from "../assets/img/ProjImg16.png";
import ProjImg17 from "../assets/img/ProjImg17.png";
import ProjImg18 from "../assets/img/ProjImg18.jpg";
import ProjImg19 from "../assets/img/ProImg19.png";
import ProjImg20 from "../assets/img/ProImg20.png";
import ProjImg21 from "../assets/img/ProImg21.png";
import ProImg22 from "../assets/img/ProImg22.png";
import ProImg23 from "../assets/img/proImg23.png";
import ProImg25 from "../assets/img/proImg24.png";
import ProjectCard from './ProjectCard';
import ProImg26 from '../assets/img/shop.png'
import ProImg27 from '../assets/img/tic.png'
const Projects = () => {
  
const projects = [

    {
      title: "Landing Page",
      description: "Development",
      imgUrl: ProjImg1,
      link:'https://github.com/OmniaRafat232111121/easybank-landing-page-master'
    
    },
    {
      title: "Sunny Summer",
      description: " Development",
      imgUrl: ProjImg2,
      link:'https://github.com/OmniaRafat232111121/sunnyside-agency-landing-page-main'
    },
    {
      title: "Healthy&tasty",
      description: "Development",
      imgUrl: ProjImg3,
      link:'https://github.com/OmniaRafat232111121/Healthy-tasty'
    },
    {
      title: "Blog",
      description: "Development",
      imgUrl: ProjImg4,
      link:'https://github.com/OmniaRafat232111121/Blog'
    },
    {
      title: "FitnessGym",
      description: " Development",
      imgUrl: ProjImg5,
      link:'https://github.com/OmniaRafat232111121/Fitness'
    },
    {
      title: "Resturant",
      description: "Design & Development",
      imgUrl: ProjImg6,
      link:'https://github.com/OmniaRafat232111121/TheROSA'
    },
    {
        title: "Furniture room",
        description: "Development",
        imgUrl: ProjImg7,
        link:'https://github.com/OmniaRafat232111121/room-homepage-master-master'
      },
      {
        title: "Food",
        description: "Development",
        imgUrl: ProjImg8,
      },
      {
        title: "Portfolio",
        description: "Development",
        imgUrl: ProjImg11,
      },
      {
        title: "RealState",
        description: "Development",
        imgUrl: ProjImg9,
        link:'https://github.com/OmniaRafat232111121/real_State'
      },
      {
        title: "weather",
        description: "Development",
        imgUrl: ProjImg10,
        link:'https://github.com/OmniaRafat232111121/weather'
      },
      {
        title: "ATHELETE",
        description: "Development",
        imgUrl: ProjImg12,
        link:'https://github.com/OmniaRafat232111121/Gym-'
      },
      {
        title: "Manage",
        description: "Development",
        imgUrl: ProjImg13,
        link:'https://github.com/OmniaRafat232111121/manage_landing_Page'
      },
      {
        title: "E-commerce",
        description: "Development",
        imgUrl: ProjImg14,
        link:'https://github.com/OmniaRafat232111121/manage_landing_Page'
      },{
        title: "cryptocurrency",
        description: "Development",
        imgUrl: ProjImg15,
        link:'https://cryptoappcoin.netlify.app/'
      },
      {
        title: "animateSalon",
        description: "Development",
        imgUrl: ProjImg16,
        link:'https://animate-salon.vercel.app/'
      },
      {
        title: "AnimateLanding",
        description: "Development",
        imgUrl: ProjImg17,
        link:'https://amazing-50im4kmw9-omniarafat232111121.vercel.app/'
      },
      {
        title: "Space_Tourism",
        description: "Development",
        imgUrl: ProjImg18,
        link:'https://space-toursim-five.vercel.app/'
      },
      {
        title: "DisenyCone",
        description: "Development",
        imgUrl: ProjImg19,
        link:'https://diseny-clone-dzlelgyo4-omniarafat232111121.vercel.app/'
      },
      {
        title: "NFT Landing",
        description: "Development",
        imgUrl: ProjImg20,
        link:'https://nft-six-dun.vercel.app/'
      },
      {
        title: "TODOLIST",
        description: "Development",
        imgUrl: ProjImg21,
        link:'https://nft-six-dun.vercel.app/'
      },
      {
        title: "Grocery",
        description: "Development",
        imgUrl: ProImg22,
        link:'https://food-web-iota.vercel.app/'
      },
      {
        title: "React",
        description: "tailwind&React JS",
        imgUrl: ProImg23,
        link:'https://tailwindreact-nine.vercel.app/'
      },
      {
        title: "Datawarehouse",
        description: "tailwind&React JS",
        imgUrl: ProImg25,
        link:'https://data-warehouse-one.vercel.app/'
      },
      {
        title: "shopingCart",
        description: "React JS with typescript",
        imgUrl: ProImg26,
        link:' https://github.com/OmniaRafat232111121/shopping'
      },
      {
        title: "Tic-Tac-Toe",
        description: "React JS with typescript",
        imgUrl: ProImg27,
        link:' https://github.com/OmniaRafat232111121/Tic-Tac-Toe'
      },
      {
        title: "Tic-Tac-Toe",
        description: "React JS with typescript",
        imgUrl: ProImg28,
        link:' https://github.com/OmniaRafat232111121/Tic-Tac-Toe'
      },

      {
        title: "Tic-Tac-Toe",
        description: "React JS with typescript",
        imgUrl: ProImg28,
        link:' https://github.com/OmniaRafat232111121/Tic-Tac-Toe'
      },
     
      https://github.com/OmniaRafat232111121/notes




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
             <Nav.Link eventKey="first">WebSItes</Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link eventKey="second">Animation</Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link eventKey="second">Games JS</Nav.Link>
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
