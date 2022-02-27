import * as React from "react";
import AboutMe from "../AboutMe/aboutme";
import ContactMe from "../ContactMe/contactme";
import Education from "../Education/education";
import Footer from "../Footer/footer";
import Hero from "../Hero/hero";
import Salesforce from "../Salesforce/salesforce";
import Skills from "../Skills/skills";
import Work from "../Work/work";
import "./home.css";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-wrapper">
          <Hero />
          <AboutMe />
          <Education />
          <Work />
          <Skills />
          <Salesforce />
          <ContactMe />
          <Footer />
      </div>
    </div>
  );
};

export default HomePage;
