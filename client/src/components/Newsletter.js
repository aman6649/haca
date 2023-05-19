import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const handleDownload = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1ZSdwSmv3W6yvGYxtK6EXJmyaIOPvdfM1/view?usp=share_link";
    window.open(pdfUrl, "_blank");
  };

  const [isLaptopView, setIsLaptopView] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsLaptopView(window.innerWidth >= 992);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const buttonStyle = isLaptopView ? { marginLeft: "100px" } : {};

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              For more detailed information about the HackFest, please refer to
              the attached PDF document.
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <div className="new-email-bx">
              <button
                type="button"
                onClick={handleDownload}
                style={buttonStyle}
              >
                Download
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
