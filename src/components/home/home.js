import * as React from "react";
import AboutMe from "../AboutMe/aboutme";
import ContactMe from "../ContactMe/contactme";
import Education from "../Education/education";
import Footer from "../Footer/footer";
import Hero from "../Hero/hero";
import "./home.css";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-wrapper">
          <Hero />
          <AboutMe />
          <ContactMe />
          <Education />
          <Footer />
      </div>
    </div>
  );
};

export default HomePage;
