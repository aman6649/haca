import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/corsitlogo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  // const handleDownload = () => {
  //   const pdfUrl =
  //     "https://drive.google.com/file/d/1avP75STLCEgrenUVHuBv511RP20QXv2E/view?usp=sharing";
  //   window.open(pdfUrl, "_blank");
  // };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#prizes"
                className={
                  activeLink === "prizes" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("prizes")}
              >
                Prizes
              </Nav.Link>
              <Nav.Link
                href="#domains"
                className={
                  activeLink === "domains"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("domains")}
              >
                Domains
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/company/corsit/mycompany/">
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a href="https://www.facebook.com/thecorsit/">
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a href="https://www.instagram.com/corsit.sit/">
                  <img src={navIcon3} alt="Icon" />
                </a>
                <a href="https://www.youtube.com/channel/UCcm-ttunddHrEGWUdYkUd2w">
                  <img src={navIcon4} alt="Icon" />
                </a>
              </div>
              {/* <HashLink to="#connect"> */}
              <a
                href="../CORSIT HackFest'23.pdf"
                download={"HACKFEST'23 Brochure"}
              >
                <button className="vvd">
                  <span>Download Brochure</span>
                </button>
              </a>
              {/* </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
