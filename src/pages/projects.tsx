import * as React from "react";
import { Box, Container, Stack, Drawer, Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Colors } from "../colors/colors";

// components
import Navbar from "../components/navbar/navbar";
import BorderedTextBlock from "../components/borderedTextBlock/borderedTextBlock";
import ResumeBlock from "../components/resumeBlock/resumeBlock";
import ProjectTemplate from "../components/project/project";

// firebase
import { getResume } from "../../utils/resume";

// json data
const projectsData = require("../assets/json/projects.json");
const designData = require("../assets/json/designProjects.json");

// set dialog transition
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
      easing={{
        enter: "ease-in-out",
        exit: "ease-in-out",
      }}
    />
  );
});

const ProjectsPage = () => {
  // drawer state
  const [open, setOpen] = React.useState(false);
  const [project, setProject] = React.useState({});

  const toggleDialog = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const setActiveProject = (project) => {
    setProject(project);
  };

  // get resume
  React.useEffect(() => {
    getResume();
  }, []);

  return (
    <main>
      <Dialog open={open} fullScreen TransitionComponent={Transition}>
        <ProjectTemplate project={project} closeProject={toggleDialog} />
      </Dialog>

      {/* <Drawer open={open} variant="persistent">
				<ProjectTemplate />
			</Drawer> */}

      <Stack direction={"column"} gap={2} pb={20}>
        {/* navbar */}
        <Navbar />

        {/* about project */}
        <Box py={10}>
          <Container maxWidth="lg">
            <BorderedTextBlock
              data={{
                color: Colors.brownHeaderText,
                alignItems: "center",
                header: "All Projects",
                subheader: ["2018 - Present"],
                content: `A collection of some design and developement work throughout the years, take a peak below`,
              }}
            />
          </Container>
        </Box>

        {/* projects */}
        <Box>
          <Container
            sx={{
              backgroundColor: Colors.redPageBackground,
              borderRadius: "4rem",
              padding: "0px !important",
            }}
          >
            <Container maxWidth="md" sx={{ padding: "0px !important" }}>
              <ResumeBlock
                data={{
                  header: "Developement",
                  content: projectsData,
                }}
                openProject={toggleDialog}
                setProject={setActiveProject}
              />
            </Container>
          </Container>
        </Box>

        {/* designs */}
        <Box>
          <Container
            sx={{
              backgroundColor: Colors.neutralPageBackground,
              borderRadius: "4rem",
              padding: "0px !important",
            }}
          >
            <Container maxWidth="md" sx={{ padding: "0px !important" }}>
              <ResumeBlock
                data={{
                  header: "Designs",
                  content: designData,
                }}
                openProject={toggleDialog}
                setProject={setActiveProject}
              />
            </Container>
          </Container>
        </Box>
      </Stack>
    </main>
  );
};

export default ProjectsPage;
