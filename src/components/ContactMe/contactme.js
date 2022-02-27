import * as React from "react";
import Body from "../common/Body/body";
import Button from "../common/Button/button";
import Header from "../common/Header/header";
import "./contactme.css";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <div className="contact-me__wrapper">
        <Header>Check me out</Header>
        <Body className="contact-me__body">See more of my work</Body>

        <div className="contact-me__buttons">
          <Button label="LinkedIn" url="https://www.linkedin.com/in/ikecojielo/" target="_blank" />
          <Button label="Behance" url="https://www.behance.net/ikeojielo" target="_blank" />
          <Button label="GitHub" url="https://github.com/ojieloi" target="_blank" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
