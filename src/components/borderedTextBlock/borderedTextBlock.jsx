import * as React from "react";
import "./borderedTextBlock.css";

// comps
import Divider from "@mui/material/Divider";
import { BodyText, SubheaderText, SubBodyText } from "../../styledComponents";
import { Stack } from "@mui/material";

const BorderedTextBlock = ({ data }) => {
  const subheaderContent = data.subheader.map((item, index) => (
    <SubBodyText key={index}>{item}</SubBodyText>
  ));

  return (
    <section
      className="bordered-text-block"
      style={{
        border: data.bdColor ? data.bdColor + "0.25rem solid" : "none",
        alignItems: data.alignItems
          ? data.alignItems
          : "flex-start",
      }}
    >
      <SubheaderText color={data.color}>{data.header}</SubheaderText>

      <Stack
        direction={"row"}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        {subheaderContent}
      </Stack>

      <BodyText style={{ marginTop: 10, textAlign: data.alignItems }}>{data.content}</BodyText>
    </section>
  );
};

export default BorderedTextBlock;
