import * as React from "react";
import "./project.css";

import { Stack, Box, Container, IconButton, Typography } from "@mui/material";
import { ChevronLeftRounded } from "@mui/icons-material";

import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

// framer
import { ListItemVariants } from "../../framer-motion";
import { motion } from "framer-motion";

// Texts
import { BodyText, HeaderText, SubBodyText } from "../../styledComponents";

// Colors
import { Colors } from "../../colors/colors";

const transition = {
	type: "spring",
	damping: 25,
	stiffness: 120,
};

const LightTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.common.white,
		color: "rgba(0, 0, 0, 0.87)",
		boxShadow: theme.shadows[1],
		fontSize: "0.8rem",
		fontFamily: "'Inter', sans-serif",
		padding: "0.6rem 1rem",
	},
}));

const ProjectTemplate = ({ closeProject, project }) => {
	return (
		<main>
			<Box sx={{ minHeight: "100vh", backgroundColor: "#fbfbfb" }} py={2}>
				<Container maxWidth="lg">
					<Stack direction={"column"} gap={2}>
						{/* header */}
						<Box pt={2}>
							<Container>
								<LightTooltip title="Back to projects">
									<IconButton
										onClick={() => {
											closeProject(false);
										}}
										sx={{ ml: 1 }}
									>
										<ChevronLeftRounded />
									</IconButton>
								</LightTooltip>
							</Container>
						</Box>

						{/* project... */}
						<Box py={10}>
							<Container maxWidth="md">
								<Stack direction={"column"} gap={4} textAlign={"center"}>
									{/* name */}
									<HeaderText color={Colors.blackText}>
										{project.name}
									</HeaderText>

									{/* type */}
									<SubBodyText color={Colors.brownBodyText}>
										{project.type}
									</SubBodyText>

									{/* description */}
									<BodyText color={Colors.brownBodyText}>
										{project.description}
									</BodyText>
								</Stack>
							</Container>
						</Box>

						{/* project images, etc */}
						<Stack direction={"column"} gap={4}>
							{project.images.map((image, index) => (
								<motion.div
									variants={ListItemVariants}
									initial="initial"
									whileInView="animate"
									key={index}
									custom={index}
									viewport={{
										once: true,
									}}
								>
									<img
										key={index}
										src={image.url}
										style={{
											border: "1px solid",
											borderColor: Colors.grayBorder,
											borderRadius: "10px",
											width: "100%",
										}}
									/>
								</motion.div>
							))}
						</Stack>
					</Stack>
				</Container>
			</Box>
		</main>
	);
};

export default ProjectTemplate;
