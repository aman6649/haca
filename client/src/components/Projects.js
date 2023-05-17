import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import iot from "../assets/img/iot.png";
import cyber from "../assets/img/cyber.png";
import blockchain from "../assets/img/blockchain.png";
import ai from "../assets/img/ai2.png";
import ar from "../assets/img/ar2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Internet of Things",
      description:
        "Connect several devices together and help them communicate efficiently to help the world in your own, unique way.",
      imgUrl: iot,
    },
    {
      title: "CyberSecurity",
      description:
        "Lock out the hackers, safeguard your data - embrace the shield of cybersecurity.",
      imgUrl: cyber,
    },
    {
      title: "BlockChain",
      description:
        "Leverage the power of blockchain and interdisciplinary technologies to drive groundbreaking solutions.",
      imgUrl: blockchain,
    },
    {
      title: "AI & ML",
      description:
        "Simulate human intelligence and show-off various applications that make AI&ML one of the most popular domains in computer science.",
      imgUrl: ai,
    },
    {
      title: "Augmented Reality",
      description:
        "Step into a world where reality and imagination collide with the captivating magic of Augmented Reality.",
      imgUrl: ar,
    },
    {
      title: "Open Innovation",
      description:
        "Freedom to build solutions to your own problems and truly show the rest your creative prowess.",
      imgUrl: ai,
    },
  ];

  return (
    <section className="project" id="domains">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Domains</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
