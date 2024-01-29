import * as React from "react";
import { Box, Container, Stack, Drawer, Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Colors } from "../colors/colors";

// components
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import BorderedTextBlock from "../components/borderedTextBlock/borderedTextBlock";
import ProjectsBlock from "../components/projectsBlock/projectsBlock";
import ProjectTemplate from "../components/project/project";

import useSWR from "swr";
import { client } from "../../utils/contentful";

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

// fetch projects
const fetcher = async () => {
  const designsData = await client.getEntries({ content_type: "design" });
  const developmentData = await client.getEntries({ content_type: "project" });

  // design projects
  const designs = designsData.items.map((data) => {
    const { fields } = data;

    let imagesEntry = JSON.stringify(fields.images);
    let imagesData = JSON.parse(imagesEntry);

    return {
      name: fields.name,
      type: fields.type,
      description: fields.description,
      images: imagesData.map((image) => {
        return {
          title: image.fields.title,
          url: image.fields.file.url,
        };
      }),
    };
  });

  // dev projects
  const developments = developmentData.items.map((data) => {
    const { fields } = data;

    let imagesEntry = JSON.stringify(fields.images);
    let imagesData = JSON.parse(imagesEntry);

    return {
      name: fields.name,
      type: fields.type,
      description: fields.description,
      images: imagesData.map((image) => {
        return {
          title: image.fields.title,
          url: image.fields.file.url,
        };
      }),
    };
  });

  return { designs, developments };
};

const ProjectsPage = () => {
  // fetch data
  const { data, error } = useSWR("contentful", fetcher);
  const designProjects = data?.designs;
  const devProjects = data?.developments;

  if (error) {
    console.error(error);
  }

  // console.log(designProjects, devProjects);

  // drawer state
  const [open, setOpen] = React.useState(false);
  const [project, setProject] = React.useState({});

  const toggleDialog = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const setActiveProject = (item) => {
    setProject({});
    setProject(item);
  };

  if (!(designProjects && devProjects)) {
    console.error("No data");
  } else {
    return (
      <main>
        <Dialog open={open} fullScreen TransitionComponent={Transition}>
          <ProjectTemplate project={project} closeProject={toggleDialog} />
        </Dialog>

        {/* <Drawer open={open} variant="persistent">
		      <ProjectTemplate />
		    </Drawer> */}

        <Stack direction={"column"}>
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

          {/* dev projects */}
          <Box sx={{
            backgroundColor: Colors.redPageBackground,
            padding: "0px !important",
          }}>
            <Container maxWidth="lg" sx={{ padding: "0px !important" }}>
              <ProjectsBlock
                data={{
                  header: "Developement",
                  content: devProjects,
                }}
                openProject={toggleDialog}
                setProject={setActiveProject}
              />
            </Container>
          </Box>

          {/* design projects */}
          <Box sx={{
            backgroundColor: Colors.neutralPageBackground,
            padding: "0px !important",
          }}>
            <Container maxWidth="lg" sx={{ padding: "0px !important" }}>
              <ProjectsBlock
                data={{
                  header: "Design",
                  content: designProjects,
                }}
                openProject={toggleDialog}
                setProject={setActiveProject}
              />
            </Container>
          </Box>

          {/* footer */}
          <Footer />
        </Stack>
      </main>
    );
  }
};

export default ProjectsPage;
