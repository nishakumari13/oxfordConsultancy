import React from "react";
import "./company.css";
import { Container, Row, Col } from "reactstrap";
import { SiWipro } from "react-icons/si";
import { SiInfosys } from "react-icons/si";
import { SiDell } from "react-icons/si";
import co1 from "../images/co1.jpeg";
import co2 from "../images/co2.jpeg";
import co3 from "../images/co3.jpeg";
import co4 from "../images/co4.jpeg";
import co5 from "../images/co5.jpeg";
import co6 from "../images/co6.jpeg";
import co7 from "../images/co7.jpeg";
import co8 from "../images/co8.jpeg";
import co9 from "../images/co9.jpeg";
import co10 from "../images/co11.jpeg";

const Company = () => {
  return (
    <div>
      <Container
        className="container"
        id="company"
        style={{ marginTop: "5rem", marginBottom: "5rem", width: "85%" }}
      >
        <div
          style={{
            color: "grey",
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Every year we help 1000's of Students get into the Top Universities of
          the World, namely
        </div>
        <Row
          className="rowss"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col lg="2" md="3" className="column coum ">
            <div className="com-logo">
              <img src={co1} alt="img" className="com-img" />
            </div>
            {/* <h3 className="d-flex align-items-center gap-1">
              <SiWipro style={{ color: "#17bf9e", fontSize: "3rem" }} />
              wipro
            </h3> */}
          </Col>
          <Col lg="2" md="3" className="column coum">
            <div className="com-logo">
              <img src={co2} alt="img" className="com-img" />
            </div>
          </Col>
          <Col lg="2" md="3" className="column coum">
            <div className="com-logo">
              <img src={co3} alt="img" className="com-img" />
            </div>
          </Col>
          <Col lg="2" md="3" className="column coum">
            <div className="com-logo">
              <img src={co4} alt="img" className="com-img" />
            </div>
          </Col>
          <Col lg="2" md="3" className="column coum">
            <div className="com-logo">
              <img src={co5} alt="img" className="com-img" />
            </div>
          </Col>
          <Col lg="2" md="3" className="column coum">
            <div className="com-logo">
              <img src={co6} alt="img" className="com-img" />
            </div>
          </Col>
          <Col lg="2" md="3" className="column coum">
            <div className="com-logo">
              <img src={co7} alt="img" className="com-img" />
            </div>
          </Col>
          <Col lg="2" md="3" className="column coum">
            <div className="com-logo">
              <img src={co8} alt="img" className="com-img" />
            </div>
          </Col>
          <Col lg="2" md="3" className="column coum">
            <div className="com-logo">
              <img src={co9} alt="img" className="com-img" />
            </div>
          </Col>
          <Col lg="2" md="3" className="column coum">
            <div className="com-logo">
              <img src={co10} alt="img" className="com-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Company;
