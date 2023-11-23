import * as React from "react";
import "./borderedTextBlock.css";

// comps
import { BodyText, SubheaderText, SubBodyText } from "../../styledComponents";
import { Stack } from "@mui/material";
import { Colors } from "../../colors/colors";

const BorderedTextBlock = ({ data }) => {
  const subheaderContent = data.subheader.map((item, index) => (
    <SubBodyText key={index} color={Colors.brownHeaderText}>{item}</SubBodyText>
  ));

  return (
    <section
      className="bordered-text-block"
      style={{
        border: data.bdColor ? data.bdColor + "0.25rem solid" : "none",
        alignItems: data.alignItems ? data.alignItems : "flex-start",
        textAlign: data.alignItems ? data.alignItems : "left",
      }}
    >
      <SubheaderText color={data.color}>{data.header}</SubheaderText>

      <Stack
        direction={"column"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        spacing={2}
      >
        {subheaderContent}
      </Stack>

      <BodyText style={{ marginTop: 10, textAlign: data.alignItems }} color={Colors.brownBodyText}>
        {data.content}
      </BodyText>
    </section>
  );
};

export default BorderedTextBlock;
