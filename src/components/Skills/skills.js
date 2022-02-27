import * as React from "react";
import Body from "../common/Body/body";
import Header from "../common/Header/header";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-wrapper">
        <div className="skills-wrapper__design">
          <div className="skills-wrapper__overlay"></div>
          <div className="skills-wrapper__text-wrapper">
            <Header className="skills-wrapper__header">Design</Header>
            <Body className="skills-wrapper__body">
              UX Ideation & Workflows, Interaction and UI Design, Wireframing,
              Prototyping - inVision Studio, Figma, Adobe XD
            </Body>
          </div>
        </div>
        <div className="skills-wrapper__dev">
          <div className="skills-wrapper__overlay"></div>
          <div className="skills-wrapper__text-wrapper">
            <Header className="skills-wrapper__header">Dev</Header>
            <Body className="skills-wrapper__body">
              HTML & CSS, JavaScript, React & Angular JS, Salesforce & LWCs,
              Ionic, Firebase
            </Body>
          </div>
        </div>
      </div>
      <div className="skills-wrapper__gray-bg"></div>
    </div>
  );
};

export default Skills;
