import React from "react";
import "./hero.css";
import { Container, Row, Col } from "reactstrap";
import hero from "../images/h3.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container style={{ width: "85%" }} id="hero">
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content ">
              <h2 className="mb-4">
                {/* Make your Study Top University Dreams Come True With Us */}
                Make your dreams of joining a Top University into reality with
                Us
              </h2>
              <p className="mb-3 texto">
                Book a Session with our Experts for FREE Assistance for your
                Application Process
              </p>

              <div className="search">
                {/* <input type="text" placeholder="Search" /> */}
                <a
                  className="btn"
                  style={{
                    color: "white",
                    fontWeight: "400",
                    letterSpacing: "0.5px",
                  }}
                  href="#contact"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <img src={hero} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
