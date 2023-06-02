import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const handleDownload = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1kfUKJqb_KCaAkXkyh7f5Q3YbAF9DQgir/view";
    window.open(pdfUrl, "_blank");
  };
  const handleDownload1 = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1n0Ce0fL7pB8aJ0zPbVCpWiNExhdhsim4/view";
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

  const buttonStyle = isLaptopView
    ? { marginLeft: "8px", whiteSpace: "nowrap" }
    : { whiteSpace: "nowrap" };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5} style={{ alignContent: "center" }}>
            <h5 style={{ whiteSpace: "nowrap" }}>Refer Attached PDF</h5>{" "}
          </Col>
          <Col lg={12} md={6} xl={5}>
            <div className="new-email-bx">
              <button
                type="button"
                onClick={handleDownload}
                style={buttonStyle}
              >
                Abstract Format
              </button>
            </div>
            <div className="new-email-bx">
              <button
                type="button"
                onClick={handleDownload1}
                style={buttonStyle}
              >
                Rule Book
              </button>
            </div>
          </Col>
          {/* <Col md={6} xl={7}>
            <div className="new-email-bx">
              <button
                type="button"
                onClick={handleDownload1}
                style={buttonStyle}
              >
                Rule Book
              </button>
            </div>
          </Col> */}
        </Row>
      </div>
    </Col>
  );
};
