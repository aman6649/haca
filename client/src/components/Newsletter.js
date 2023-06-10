import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
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
            <h5>Submit the abstract in TeamLeadName.docx/.pdf formate only</h5>{" "}
          </Col>
          <Col lg={12} md={6} xl={5}>
            <div className="new-email-bx">
              <a href="../AbstractFormat.docx" download={"AbstractFormat"}>
                <button type="button" style={buttonStyle}>
                  Abstract Format
                </button>
              </a>
            </div>
            <div className="new-email-bx">
              <a href="../RuleBook.pdf" download={"RuleBook"}>
                <button style={buttonStyle}>Rule Book</button>
              </a>
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
