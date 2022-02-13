import * as React from "react";
import Link from "../common/Link/link";
import Body from "../common/Body/body";
import Header from "../common/Header/header";
import "./work.css";

const Work = () => {
  return (
    <div className="work">
      <div className="work-wrapper">
        <div className="work-wrapper__left">
          <Body className="work-wrapper__body">
            Currently a Front End Developer for <b>Shift7 Digital</b>, joined in the
            summer of 2021. We work primarily with Salesforce and LWC’s but
            also dabble with React JS and Bloomreach, depending on the project
            and the client’s needs.
          </Body>
          <Link href="https://www.shift7digital.com/" target="_blank" aria-label="open site">Learn More</Link>
        </div>
        <div className="work-wrapper__right">
          <Header>Work</Header>
        </div>
      </div>
    </div>
  );
};

export default Work;
