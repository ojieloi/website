import * as React from "react";
import "./borderedTextBlock.css";
import { Colors } from "../../colors/colors";

// comps
import Divider from "@mui/material/Divider";
import { BodyText } from "../../styledComponents";
import { Typography, Stack } from "@mui/material";

const BorderedTextBlock = ({ data }) => {
  const subheaderContent = data.subheader.map((item, index) => (
    <span key={index}>{item}</span>
  ));

  return (
    <section className="bordered-text-block">
      {/* header */}
      <Typography
        component={"h1"}
        sx={{
          color: data.color,
          fontSize: "16px",
          fontWeight: 700,
        }}>
        {data.header}
      </Typography>

      {/* subheader */}
      <Typography
        component={"h3"}
        sx={{
          color: Colors.darkGray,
          fontSize: "12px",
          fontWeight: 700,
          marginBottom: "10px",
          marginTop: "5px"
        }}>
        <Stack
          direction={"row"}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}>
          {subheaderContent}
        </Stack>
      </Typography>

      {/* content */}
      <BodyText>{data.content}</BodyText>
    </section>
  );
};

export default BorderedTextBlock;
