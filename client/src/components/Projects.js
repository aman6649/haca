import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import iot from "../assets/img/iot.png";
import cyber from "../assets/img/cyber.png";
import blockchain from "../assets/img/blockchain.png";
import ai from "../assets/img/ai2.png";
import ar from "../assets/img/ar2.png";
import energy from "../assets/img/energy2.png";
import social from "../assets/img/social.png";
import data from "../assets/img/data.png";
import electric from "../assets/img/electric.png";
import open from "../assets/img/open.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "CyberSecurity",
      description:
        "Lock out the hackers, safeguard your data - embrace the shield of cybersecurity.",
      imgUrl: cyber,
    },
    {
      title: "Augmented Reality",
      description:
        "Step into a world where reality and imagination collide with the captivating magic of Augmented Reality.",
      imgUrl: ar,
    },
    {
      title: "Internet of Things",
      description:
        "Creating a network of smart devices that can communicate and exchange data",
      imgUrl: iot,
    },
    {
      title: "Social Media",
      description:
        "Developing a tool that provides insights into social media trends, user behavior, and engagement, using data analysis and visualization techniques",
      imgUrl: social,
    },
    {
      title: "BlockChain",
      description:
        "Leverage the power of blockchain and interdisciplinary technologies to drive groundbreaking solutions.",
      imgUrl: blockchain,
    },
    {
      title: "Data Science",
      description:
        "Creating predictive models in the field of medical, e-commerce,business and much more which provides valuable insights on the basis of data and takes data-driven-decision.",
      imgUrl: data,
    },
    {
      title: "Energy",
      description:
        "Creating a system that uses sensors and machine learning algorithms to optimize energy usage in buildings and homes, reducing waste and lowering costs.",
      imgUrl: energy,
    },
    {
      title: "Machine Learning",
      description:
        "By integrating sustainability and machine learning, we can work towards a more sustainable future and reduce the environmental impact of various industries and practices.",
      imgUrl: ai,
    },
    {
      title: "Electric Vehicle",
      description:
        "Incorporate sustainable practices and materials, as well as power EVs with renewable energy sources that can help reduce the environmental impact of transportation and move towards a more sustainable future.",
      imgUrl: electric,
    },

    {
      title: "General Engineering",
      description:
        "Apply engineering principles and practices to design and        develop sustainable solutions that meet the needs of society   while minimizing the impact on the environment.Ensure that      the design is both sustainable and economically viable.",
      imgUrl: open,
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
                  <h2>Domains </h2>
                  <p>
                    "Explore a myriad of cutting-edge domains and choose your
                    passion at our virtual hackathon, ranging from artificial
                    intelligence and blockchain to cybersecurity and sustainable
                    technology."
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
                        <Row
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
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
