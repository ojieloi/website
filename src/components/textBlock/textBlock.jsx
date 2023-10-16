import * as React from "react";

// components
import { Stack, Link, Box, Container } from "@mui/material";
import { HeaderText, BodyText } from "../../styledComponents";
import { Colors } from "../../colors/colors";

const TextBlock = () => {
  // rotating text
  var ReactRotatingText = require("react-rotating-text");

  return (
    <Container>
      <Box sx={{ px: 4, py: "50px" }}>
        <Stack direction={"column"} spacing={1}>
          <HeaderText>
            <Stack direction={"row"} spacing={1}>
              {/* rotating text carousel */}
              <ReactRotatingText
                items={["Hi, welcome", "Kedu", "Bonjour", "Hola"]}
              />

              {/* wave emoji */}
              <span>✌🏾</span>
            </Stack>
          </HeaderText>

          {/* content */}
          <BodyText>
            I’m Ik, a Front End Developer currently working at
            <Link
              component={"a"}
              href="https://www.shift7digital.com/"
              target="_blank"
              sx={{ color: Colors.blue, paddingLeft: "3px", fontWeight: 700 }}
              underline="hover">
              Shift7, a Merkle Company
            </Link>
            . I also delve into some UI design from time to time. Both of these
            fuel my passion for creating user-centered experiences, while also
            turning these ideas into practical solutions.
          </BodyText>
        </Stack>
      </Box>
    </Container>
  );
};

export default TextBlock;
