import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { storage } from "./firebase";
import { ref, uploadBytes } from "firebase/storage";
import contactImg from "../assets/img/contact-img.svg";
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
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [fileUpload, setfileUpload] = useState(null);
  const [fileUploadStatus, setfileUploadStatus] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    if (fileUpload == null) {
      setStatus({
        succes: false,
        message: "Please select abstract to upload !!!",
      });
    } else {
      const fileref = ref(storage, `file/${fileUpload.name + v4()}`);
      uploadBytes(fileref, fileUpload)
        .then(() => {
          fileref.getDownloadURL().then((url) => {
            const dataO = {
              name: formDetails.name,
              email: formDetails.email,
              phone: formDetails.phone,
              clg: formDetails.clg,
              abstractLink: url,
            };
            axios
              .post("/signup", dataO)
              .then((res) => {
                setFormDetails(formInitialDetails);
                setfileUpload(null);
                setStatus({ succes: true, message: "Registered successfully" });
                setButtonText("Send");
              })
              .catch((err) => {
                setStatus({
                  succes: false,
                  message: "Something went wrong, please try again later.",
                });
              });
          });
        })
        .catch((err) => {
          setStatus({
            succes: false,
            message: "Something went wrong, please try again later.",
          });
        });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col>
            {/* <img src={"../qr.jpeg"} alt="QR" /> */}
            <img src={contactImg} alt="img" />
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
                        {/* <input
                          type="text"
                          value={formDetails.TsacId}
                          placeholder="Add Transaction ID of ₹200"
                          required
                          onChange={(e) =>
                            onFormUpdate("TsacId", e.target.value)
                          }
                        /> */}
                        <div class="file d-flex align-items-center justify-content-center flex-nowrap">
                          <div>
                            {" "}
                            <label htmlFor="fileUpload">
                              Submit Abstract Here:
                            </label>
                            <input
                              type="file"
                              accept=".docx,.pdf"
                              id="fileUpload"
                              onChange={(event) => {
                                setfileUpload(event.target.files[0]);
                              }}
                              required
                            />
                          </div>
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
