import * as React from "react";
import Body from "../common/Body/body";
import Header from "../common/Header/header";
import Link from "../common/Link/link";
import Subheader from "../common/Subheader/subheader";
import "./salesforce.css";

const Salesforce = () => {
  return (
    <div className="salesforce">
      <div className="salesforce-wrapper">
        <Header className="salesforce-wrapper__header">Salesforce</Header>
        <Subheader className="salesforce-wrapper__subheader">
          Javascript Developer I Certified
        </Subheader>
        <Body className="salesforce-wrapper__body">
          Completed the Lightning Web Components Specialist Superbasdge and
          successfully passed the Javascript Developer I mulitple-choice
          proctored exam.
        </Body>
        <Link href="https://trailblazer.me/id/ikojielo" target="_blank" aria-label="open trailhead">
          View Trailhead
        </Link>
      </div>
    </div>
  );
};

export default Salesforce;
