import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import { SiSololearn } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import logo from "../images/ox-logo.jpeg";

const Header = () => {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active_menu");
  const navLinks = [
    {
      display: "Home",
      url: "#hero",
    },
    {
      display: "About",
      url: "#about",
    },
    {
      display: "Reviews",
      url: "#course",
    },
    {
      display: "Choose Us",
      url: "#choose",
    },
    {
      display: "Contact",
      url: "#contact",
    },
  ];
  return (
    <header className="header">
      <Container style={{ marginTop: "0.5rem" }}>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <div className="d-flex align-items-center logo-section">
              <img
                src={logo}
                alt="logo"
                style={{ width: "100%", height: "100%" }}
              />
              <h2
                className="d-flex align-items-center h2-tag"
                // style={{ fontSize: "1.5rem" }}
              >
                {/* <SiSololearn style={{ color: "#17bf9e", fontSize: "3rem" }} /> */}
                Oxford Consultants
              </h2>
            </div>
          </div>
          <div className="nav d-flex align-items-center gap-5">
            <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav_list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav_item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_right">
              <div className="mb-0 d-flex align-items-center gap-2">
                <AiOutlinePhone
                  style={{ color: "#44a1db", fontSize: "3rem" }}
                />{" "}
                +91 94311 31121
              </div>
            </div>
          </div>
          <div className="mobile_menu">
            <BiMenuAltRight
              style={{ color: "#44a1db", fontSize: "3rem" }}
              onClick={menuToggle}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
