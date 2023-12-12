import * as React from "react";
import { Box, Container, Stack } from "@mui/material";
import Navbar from "../components/navbar/navbar";
import BorderedTextBlock from "../components/borderedTextBlock/borderedTextBlock";
import { Colors } from "../colors/colors";

import ResumeBlock from "../components/resumeBlock/resumeBlock";

// json data
const projectsData = require("../assets/json/projects.json");
const designData = require("../assets/json/designs.json");

const ProjectsPage = () => (
	<main>
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
						/>
					</Container>
				</Container>
			</Box>
		</Stack>
	</main>
);

export default ProjectsPage;
