import { Container, Row, Col, Tab, Nav, Anchor } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/CICD.png";
import projImg5 from "../assets/img/smartbot.jpeg";
import projImg6 from "../assets/img/aircanvas.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "CI/CD Pipeline of DockerBased Application",
      description: "when DockerFile has a new commit our Jenkins  automates the build process of making a DockerImage and pushing it to DockerHub",
      imgUrl: projImg4,
      Path:"https://github.com/shaggyyy2002"
    },
    {
      title: "Smart Bot",
      description: "Smartbot is a Rule based bot which gives answers to only some set of questions to overcome the problem. We connected our bot to the Internet using Java Swing and AWT so that the queries/questions which are unknown will be searched directly on your Home browser.",
      imgUrl: projImg5,
    },
    {
      title: "Air Canvas",
      description: "Air Canvas is an OpenCV project which tracks a point(bead) to draw lines/draw diagrams without touching the screen. If integrated with a meeting platform it can help write and draw stuI on air which will be presented on the screen",
      imgUrl: projImg6,
    },
  ];
  const blogs = [
    {
      title: "Git & Github",
      description: "An Into to Git & Github",
      imgUrl: projImg1,
      
    },
    {
      title: "Intro to Terraform",
      description: "Brief Intro about Terraform",
      imgUrl: projImg2,
    },
    {
      title: "DevOps,DevOps Everywhere",
      description: "What is DevOps? An Introduction",
      imgUrl: projImg3,
    }, 
  ];
  const seminars = [
    // to be added latter
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "": ""}>
                <h2>Projects & Blogs</h2>
                <p></p>
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
                  <Tab.Content id="slideInUp" className={isVisible ? "" : ""}>
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
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          blogs.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          seminars.map((project, index) => {
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
