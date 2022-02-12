import * as React from "react";
import Header from "../common/Header/header";
import Body from "../common/Body/body";
import "./education.css";

const Education = () => {
  return (
    <div className="education">
      <div className="education-wrapper">
        <div className="education-wrapper__left">
          <Header className="education-wrapper__left-header">Education</Header>
          <Body className="education-wrapper__left-body">
            New York Institute of Technology, 2021
          </Body>
          <Body className="education-wrapper__left-body">
            Bacherlors, Computer Science | Cum Laude
          </Body>
        </div>
        <div className="education-wrapper__right">
          <Body className="education-wrapper__right-body">
            Graduated in the Spring of 2021 after spending the last year and a
            half learning remotely due to COVID. Most of the learning experiences
            that have carried over, came from this last stretch where I took
            upon multiple developement projects that honed my skills in the
            industry I find myself working in currently.
          </Body>
        </div>
      </div>
    </div>
  );
};

export default Education;
