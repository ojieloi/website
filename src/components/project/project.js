import * as React from "react";
import { Stack, Box, Container, IconButton, Typography } from "@mui/material";
import { ChevronLeftRounded } from "@mui/icons-material";

// Texts
import { BodyText, HeaderText } from "../../styledComponents";

// Colors
import { Colors } from "../../colors/colors";

const ProjectTemplate = ({ closeProject, project }) => {
  console.log(project);

  return (
    <main>
      <Box sx={{ height: "100vh", backgroundColor: "#fbfbfb" }} py={2}>
        <Container maxWidth="lg">
          <Stack direction={"column"} gap={2}>
            {/* header */}
            <Box pt={2}>
              <Container>
                <IconButton
                  variant="contained"
                  onClick={() => {
                    closeProject(false);
                  }}
                >
                  <ChevronLeftRounded />
                </IconButton>
              </Container>
            </Box>

            {/* project desc */}
            <Box py={10}>
              <Container maxWidth="md">
                <Stack direction={"column"} gap={4} textAlign={"center"}>
                  <HeaderText color={Colors.black}>
                    {project.company}
                  </HeaderText>

                  <BodyText color={Colors.brownBodyText}>
                    {project.content}
                  </BodyText>

                  {/* <Typography variant={"h1"}>{project.company}</Typography> */}
                  {/* <Typography variant={"p"}>{project.content}</Typography> */}
                </Stack>
              </Container>
            </Box>

            {/* project images, etc */}
            <Stack direction={"column"} gap={1}>
              <img src={project.images[0]} />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </main>
  );
};

export default ProjectTemplate;
