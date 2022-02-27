import * as React from "react";
import Body from "../common/Body/body";
import Header from "../common/Header/header";
import Memoji from "../../images/memoji.svg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-wrapper__text-wrapper">
          <Header className="hero-wrapper__header">
            Hi, I'm <span className="hero-wrapper__underlined">Ik.</span>
          </Header>
          <Body className="hero-wrapper__body">
            A UI Designer and Front End Developer from New Jersey. I’m
            passionate about creating user-centered experiences, with the goal
            of turning ideas into practical and elegant solutions.
          </Body>
        </div>
        <div className="hero-wrapper__image-wrapper">
          <img className="hero-wrapper__image" src={Memoji} alt="Memoji" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
