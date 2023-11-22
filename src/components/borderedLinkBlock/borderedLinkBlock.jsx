import * as React from "react";
import "./borderedLinkBlock.css";

// trailhead logo
import trailheadLogo from "../../images/TrailheadLogo.svg";

// comps
import { Link } from "@mui/material";

const BorderedLinkBlock = () => {
  return (
    <Link
      component={"a"}
      className="bordered-link-block bordered-link-block__cta"
      target="_blank"
      aria-label="open trailhead"
      href="https://trailblazer.me/id/ikojielo"
    >
      <img src={trailheadLogo} alt="TrailheadLogo" />
    </Link>
  );
};

export default BorderedLinkBlock;
