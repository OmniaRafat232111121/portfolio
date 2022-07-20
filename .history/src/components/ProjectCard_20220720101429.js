import React from 'react'
import { Col } from "react-bootstrap";
const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
    <div className="proj-imgbx">
    <img src={imgUrl} />
    <div className="proj-txtx">
      <h4>{title}</h4>
      <span>{description}</span>
      <span></span>
    </div>
  </div>

    </Col>
  )
}

export default ProjectCard
