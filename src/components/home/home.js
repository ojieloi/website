import * as React from "react";
import "./home.css";

// comps
import { Box, Container, Stack } from "@mui/material";
import Navbar from "../navbar/navbar";
import TextBlock from "../textBlock/textBlock";
import BorderedTextBlock from "../borderedTextBlock/borderedTextBlock";
import BorderedLinkBlock from "../borderedLinkBlock/borderedLinkBlock";
import BorderedListBlock from "../borderedListBlock/borderedListBlock";

// styled components
import { HeaderText } from "../../styledComponents";
import { Colors } from "../../colors/colors";

const HomePage = () => {
  return (
    <Container maxWidth="md" sx={{ py: "40px" }}>
      <Box>
        <Stack direction={"column"}>
          {/* page nav */}
          <Navbar />

          {/* home intro text */}
          <TextBlock />

          <div className="simple-grid">
            {/* education */}
            <BorderedTextBlock
              data={{
                color: Colors.yellow,
                header: "New York Institute of Technology",
                subheader: ["2016 - 2020", "Bachelors, Computer Science"],
                content: `Graduated in the Spring of 2021 after spending the last year and a
                  half learning remotely due to COVID. Most of learning experiences
                  that have carried over, came from this last stretch where I took
                  upon multiple developement projects that honed my skills in this
                  industry I find myself working in currently.`,
              }}
            />

            <div className="two-column-grid">
              {/* salesforce certification */}
              <BorderedTextBlock
                data={{
                  color: Colors.blue,
                  header: "Salesforce Certified",
                  subheader: ["Javascript Developer I"],
                  content: `Completed the LWC Specialist super badge and passed the Javascript Developer I multiple choice proctored exam.`,
                }}
              />

              {/* link to trailhead */}
              <BorderedLinkBlock />
            </div>
          </div>

          {/* transition text */}
          <Box py={"100px"} textAlign={"center"}>
            <HeaderText>wait.. there’s more 👇🏾</HeaderText>
          </Box>

          {/* transition text */}
          <Box pb={"50px"} textAlign={"left"}>
            <HeaderText>what I do..</HeaderText>
          </Box>

          <div className="two-column-grid">
            <BorderedListBlock
              data={{
                header: "💻 Development",
              }}
            />

            <BorderedListBlock
              data={{
                header: "👨🏾‍🎨 Design",
              }}
            />
          </div>

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
