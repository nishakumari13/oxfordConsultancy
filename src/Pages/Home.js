import React, { Fragment } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Company from "../components/Company";
import About from "../components/About";
import Courses from "../components/Courses";
import ChooseUs from "../components/ChooseUs";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Company />
      <About />
      <Courses />
      <ChooseUs />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;
