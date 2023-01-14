import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, path }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={Link} target="_blank"/>
      <div className="proj-imgbx">
        <img src={imgUrl}/>
        <a href={Link} target="_blank"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
         <a href="https://github.com/shaggyyy2002" target="_blank"/>
        </div>
      </div>
    </Col>
  )
}
