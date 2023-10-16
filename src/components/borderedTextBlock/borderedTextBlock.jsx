import * as React from "react";
import { Colors } from "../../colors/colors";

import Divider from "@mui/material/Divider";
import { SubheaderText, BodyText } from "../../styledComponents";
import { Box, Container, Typography, Stack } from "@mui/material";

const BorderedTextBlock = ({ data }) => {
  const subheaderContent = data.subheader.map((item, index) => (
    <span key={index}>{item}</span>
  ));

  return (
    <Container>
      <Box
        sx={{
          p: 4,
          border: `1px solid ${Colors.neutralBorder}`,
          backgroundColor: Colors.white,
          borderRadius: "10px",
        }}>
        <Stack direction={"column"} spacing={1}>
          {/* header */}
          <SubheaderText>{data.header}</SubheaderText>

          {/* subheader */}
          <Typography
            component={"h3"}
            sx={{ color: Colors.darkGray, fontSize: "12px", fontWeight: 700 }}>
            <Stack
              direction={"row"}
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}>
              {subheaderContent}
            </Stack>
          </Typography>

          {/* content */}
          <BodyText>{data.content}</BodyText>
        </Stack>
      </Box>
    </Container>
  );
};

export default BorderedTextBlock;
