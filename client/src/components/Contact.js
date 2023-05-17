import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import axios from "axios";

export const Contact = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    phone: "",
    clg: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const dataO = {
      name: formDetails.name,
      email: formDetails.email,
      phone: formDetails.phone,
      clg: formDetails.clg,
    };
    axios
      .post("/signup", dataO)
      .then((res) => {
        setFormDetails(formInitialDetails);
        setStatus({ succes: true, message: "Registered successfully" });
        setButtonText("Send");
      })
      .catch((err) => {
        setStatus({
          succes: false,
          message: "Something went wrong, please try again later.",
        });
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Register Here</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="text"
                          value={formDetails.name}
                          placeholder="Team Leader Name"
                          onChange={(e) => onFormUpdate("name", e.target.value)}
                        />
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                        <input
                          type="text"
                          value={formDetails.clg}
                          placeholder="College Name"
                          onChange={(e) => onFormUpdate("clg", e.target.value)}
                        />
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
