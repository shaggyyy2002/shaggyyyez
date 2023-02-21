import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/CICD.png";
import projImg5 from "../assets/img/smartbot.jpeg";
import projImg6 from "../assets/img/aircanvas.png";
import projImg7 from "../assets/img/project-img4.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";



import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Complete CI/CD automation to deploy over Kubernetes",
      imgUrl: projImg7,
      path: "https://github.com/shaggyyy2002/Automated-CI-CD-Pipeline",
    },
    {
      title: "CI/CD for a Docker based application",
      imgUrl: projImg4,
      path: "https://github.com/shaggyyy2002/django-todo"
    },
    {
      title: "Smart Bot",
      imgUrl: projImg5,
      path: "https://github.com/shaggyyy2002/Java-Chatbot"
    },
    {
      title: "Air Canvas",
      imgUrl: projImg6,
      path: "https://github.com/shaggyyy2002/Air-Canvas"
    },
  ];
  const blogs = [
    {
      title: "Git & Github",
      description: "An Into to Git & Github",
      imgUrl: projImg1,
      path: "https://blog.kubesimplify.com/git-and-github-a-beginners-guide"
      
    },
    {
      title: "Intro to Terraform",
      description: "Brief Intro about Terraform",
      imgUrl: projImg2,
      path: "https://blog.kubesimplify.com/introduction-to-terraform"
    },
    {
      title: "DevOps,DevOps Everywhere",
      description: "What is DevOps? An Introduction",
      imgUrl: projImg3,
      path: "https://nitingouda.hashnode.dev/devops-devops-everywhere"
    }, 
    {
      title: "CI/CD using Jenkins Series - Part 1",
      description: "Basic intro to Jenkins, Installation Guide & UI Overview",
      imgUrl: projImg8,
      path: "https://nitingouda.hashnode.dev/cicd-using-jenkins-series-part-1"
    },
    {
      title: "Kubernetes Deployment Strategies",
      description: "Intro to Deployment Strategies",
      imgUrl: projImg9,
      path: "https://nitingouda.hashnode.dev/kubernetes-deployment-strategies"
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
