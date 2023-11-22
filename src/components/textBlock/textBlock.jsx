import * as React from "react";
import "./textBlock.css";

// components
import { Stack, Link, Box, Container } from "@mui/material";
import { HeaderText, BodyText } from "../../styledComponents";
import { Colors } from "../../colors/colors";

const TextBlock = () => {
  // rotating text
  var ReactRotatingText = require("react-rotating-text");

  return (
    <Box
      sx={{
        py: 20,
        backgroundColor: Colors.redPageBackground,
      }}
    >
      <Container maxWidth="md">
        <Stack direction={"column"} spacing={2} alignItems={"center"}>
          <HeaderText>
            <Stack
              direction={"row"}
              spacing={1}
              style={{ color: Colors.brownHeaderText }}
            >
              {/* rotating text carousel */}
              <ReactRotatingText
                items={["Hi, welcome", "Kedu", "Bonjour", "Hola"]}
              />

              {/* wave emoji */}
              <span>✌🏾</span>
            </Stack>
          </HeaderText>

          {/* content */}
          <BodyText
            style={{ textAlign: "center", color: Colors.brownBodyText }}
          >
            I’m Ik, a Front End Developer currently working at
            <Link
              className="text-block-link"
              component={"a"}
              href="https://www.shift7digital.com/"
              target="_blank"
              sx={{
                color: Colors.blue,
                marginLeft: "3px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Shift7, a Merkle Company
            </Link>
            . I also delve into some UI design from time to time. Both of these
            fuel my passion for creating user-centered experiences, while also
            turning these ideas into practical solutions.
          </BodyText>
        </Stack>
      </Container>
    </Box>
  );
};

export default TextBlock;
