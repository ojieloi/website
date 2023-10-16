import * as React from "react";
import "./home.css";

// components
import { Box, Container, Stack } from "@mui/material";
import Navbar from "../navbar/navbar";
import TextBlock from "../textBlock/textBlock";
import BorderedTextBlock from "../borderedTextBlock/borderedTextBlock";

// styled components
import { HeaderText } from "../../styledComponents";

const HomePage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <Box>
        <Stack direction={"column"}>
          <Navbar />
          <TextBlock />

          <BorderedTextBlock
            data={{
              header: "New York Institute of Technology",
              subheader: ["2016 - 2020", "Bachelors, Computer Science"],
              content: `Graduated in the Spring of 2021 after spending the last year and a
                  half learning remotely due to COVID. Most of learning experiences
                  that have carried over, came from this last stretch where I took
                  upon multiple developement projects that honed my skills in this
                  industry I find myself working in currently.`,
            }}
          />

          {/* transition text */}
          <Box py={"100px"} textAlign={"center"}>
            <HeaderText>wait.. there’s more 👇🏾</HeaderText>
          </Box>

          {/* transition text */}
          <Box py={"100px"} textAlign={"center"}>
            <HeaderText>before you go 👋🏾</HeaderText>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default HomePage;
