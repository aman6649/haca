import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { storage } from "./firebase";
import { ref, uploadBytes } from "firebase/storage";
// import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import axios from "axios";
import { v4 } from "uuid";

export const Contact = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    phone: "",
    clg: "",
    TsacId: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [fileUpload, setfileUpload] = useState(null);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const UploadClick = (e) => {
    e.preventDefault();
    if (fileUpload == null) return;
    const fileref = ref(storage, `file/${fileUpload.name + v4()}`);
    uploadBytes(fileref, fileUpload).then(() => {
      alert("Abstract Submitted Successfully");
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
      TsacId: formDetails.TsacId,
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
          <Col>
            <img src={"../qr.jpeg"} alt="QR" />
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
                          required
                          placeholder="Team Leader Name"
                          onChange={(e) => onFormUpdate("name", e.target.value)}
                        />
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          required
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          required
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                        <input
                          type="text"
                          value={formDetails.clg}
                          placeholder="College Name"
                          required
                          onChange={(e) => onFormUpdate("clg", e.target.value)}
                        />
                        <input
                          type="text"
                          value={formDetails.TsacId}
                          placeholder="Add Transaction ID of ₹200"
                          required
                          onChange={(e) =>
                            onFormUpdate("TsacId", e.target.value)
                          }
                        />
                        <div class="file d-flex align-items-center justify-content-center flex-nowrap">
                          <div>
                            {" "}
                            <label htmlFor="fileUpload">
                              Submit Abstract Here:
                            </label>
                            <input
                              type="file"
                              id="fileUpload"
                              onChange={(event) => {
                                setfileUpload(event.target.files[0]);
                              }}
                              required
                            />
                          </div>
                          <button
                            style={{
                              top: "-12px",
                              fontSize: "15px",
                              paddingTop: "8px",
                              paddingBottom: "8px",
                              paddingLeft: "40px",
                              paddingRight: "-10px",
                              marginLeft: "10px",
                            }}
                            onClick={UploadClick}
                          >
                            <span>Upload</span>
                          </button>
                        </div>

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
                            style={{
                              marginTop: "20px",
                              fontWeight: "bolder",
                              backgroundColor: "#ede4e8",
                              paddingLeft: "30px",
                            }}
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
