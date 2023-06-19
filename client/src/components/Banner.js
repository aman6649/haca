import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/hdr.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["HACKFEST'23"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to Virtual Hackathon</span>
                  <h2>
                    {`Presenting`}{" "}
                    <span
                      className="txt-rotate"
                      dataperiod="1000"
                      data-rotate='[ "HackFest23" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  <p>
                    HACKFEST&apos;23 is a 12-hour virtual hackathon that is
                    conducted by CORSIT every year since 2017. This event is an
                    opportunity for students to collaborate with like-minded
                    individuals to create innovative solutions to real-world
                    problems.
                  </p>
                  <p style={{ color: "white" }}>
                    Event Date:
                    <b>
                      {" "}
                      18<sup>th</sup> June 2023
                    </b>
                  </p>
                  <p style={{ color: "white" }}>
                    Last Date of Abstract Submission:{" "}
                    <b>
                      13<sup>th</sup> June 2023
                    </b>
                  </p>
                  {/* <button onClick={() => window.location.replace("/#connect")}>
                    Register Here! <ArrowRightCircle size={25} />
                  </button> */}
                  {/* </a> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    style={{ borderRadius: "9px" }}
                    src={headerImg}
                    alt="Header Img"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
