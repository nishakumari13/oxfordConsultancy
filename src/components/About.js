import React, { useState, useEffect } from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import about from "../images/a1.jpeg";
import CountUp from "react-countup";

const About = () => {
  const [count, setCount] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const targetElement = document.getElementById("counter");

    if (targetElement && scrollTop + windowHeight >= targetElement.offsetTop) {
      // If the target element is visible, update the counter
      setCount((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    // Add a scroll event listener to the window object
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Container className="container" id="about" style={{ width: "85%" }}>
        <Row>
          <Col lg="6" md="6">
            <div className="about_img">
              <img src={about} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about_content">
              <h2>About us</h2>
              <p className="text-msg">
                Oxford Consultancy as an organization helps students, parents
                and other beneficiaries with educational planning. We have
                advisors, counsellors, admission consultants, vocational
                trainers, etc. Our consultants are well-versed and experienced
                professionals who are up to date with the latest practices in
                the field of learning. They counsel and provide advice that best
                suits an individual’s interests and potential.
              </p>
              <div className="about_counter" id="counter">
                <div className="d-flex gap-5 align-items-center">
                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={5} suffix="K" />
                    </span>
                    <p className="counter_title">Completed projects</p>
                  </div>

                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={5} suffix="M" />
                    </span>
                    <p className="counter_title">Patient arount world</p>
                  </div>
                </div>
                {/* <div className="d-flex gap-5 align-items-center">
                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={6} suffix="K" />
                    </span>
                    <p className="counter_title">Completed projects</p>
                  </div>

                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={7} suffix="M" />
                    </span>
                    <p className="counter_title">Patient arount world</p>
                  </div>
                </div> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
