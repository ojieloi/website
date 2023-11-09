import * as React from "react";
import "./borderedListBlock.css";
import { Colors } from "../../colors/colors";

// comps
import { Typography } from "@mui/material";

const BorderedListBlock = ({ data }) => {
  return (
    <section className="bordered-list-block">
      <Typography
        component={"h1"}
        sx={{
          color: data.color,
          fontSize: "16px",
          fontWeight: 700,
        }}>
        {data.header}
      </Typography>
    </section>
  );
};

export default BorderedListBlock;
