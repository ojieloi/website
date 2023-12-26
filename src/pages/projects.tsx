import * as React from "react";
import { Box, Container, Stack, Drawer, Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Colors } from "../colors/colors";

// components
import Navbar from "../components/navbar/navbar";
import BorderedTextBlock from "../components/borderedTextBlock/borderedTextBlock";
// import ResumeBlock from "../components/resumeBlock/resumeBlock";
import ProjectsBlock from "../components/projectsBlock/projectsBlock";
import ProjectTemplate from "../components/project/project";

import useSWR from "swr";
import { client } from "../../utils/contentful";

// json data
// const projectsData = require("../assets/json/projects.json");
// const designData = require("../assets/json/designProjects.json");

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
	const projectsData = await client.getEntries({ content_type: "project" });

	const projects = projectsData.items.map((data) => {
		const { fields } = data;

		let imagesEntry = JSON.stringify(fields.images);
		let imagesData = JSON.parse(imagesEntry);

		return {
			name: fields.name,
			type: fields.type,
			images: imagesData.map((image) => {
				return {
					title: image.fields.title,
					url: image.fields.file.url,
				};
			}),
		};
	});

	return projects;
};

const ProjectsPage = () => {
	// fetch data
	const { data, error } = useSWR("contentful", fetcher);

	if (error) {
		console.error(error);
	}

	// console.log(data);

	// console.log("All projects", projects);

	// drawer state
	const [open, setOpen] = React.useState(false);
	const [project, setProject] = React.useState({});

	const toggleDialog = (isOpen: boolean) => {
		setOpen(isOpen);
	};

	const setActiveProject = (item) => {
		setProject(item[0]);
	};

	if (!data) {
		console.error("No data");
	} else {
		return (
			<main>
				<Dialog open={open} fullScreen TransitionComponent={Transition}>
					<ProjectTemplate project={data} closeProject={toggleDialog} />
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
								<ProjectsBlock
									data={{
										header: "Developement",
										content: data,
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
								{/* <ResumeBlock
                  data={{
                    header: "Designs",
                    content: designData,
                  }}
                  openProject={toggleDialog}
                  setProject={setActiveProject}
                /> */}
							</Container>
						</Container>
					</Box>
				</Stack>
			</main>
		);
	}
};

export default ProjectsPage;
