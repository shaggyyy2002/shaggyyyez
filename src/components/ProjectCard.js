import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, path }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <a href={path} target="_blank">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <a href={path} target="_blank"></a>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <a href={path} target="_blank"></a>
          </div>
        </div>
      </a>
    </Col>
  );
};
