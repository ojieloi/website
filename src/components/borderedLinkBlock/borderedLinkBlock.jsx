import * as React from "react";
import "./borderedLinkBlock.css";

// trailhead logo
import trailheadLogo from "../../images/TrailheadLogo.svg";

// comps
import { Link, Tooltip } from "@mui/material";

const BorderedLinkBlock = () => {
  return (
    <Tooltip title="Click to view Trailhead" followCursor={true}>
      <section className="bordered-link-block">
        <Link component={"button"} className="bordered-link-block__cta">
          <img src={trailheadLogo} alt="TrailheadLogo" />
        </Link>
      </section>
    </Tooltip>
  );
};

export default BorderedLinkBlock;
