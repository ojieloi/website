import * as React from "react";
import Link from "../common/Link/link";
import Subheader from "../common/Subheader/subheader";
import "./aboutme.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me__wrapper">
        <Subheader className="about-me__body">
          A self-proclaimed minimalist, the oldest child in a family of 6, into
          all things designs, an avid soccer and Man United fan, into aviation
          and motosport, also running out of things to say...
        </Subheader>
        <Link className="about-me__link" href="#">
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
