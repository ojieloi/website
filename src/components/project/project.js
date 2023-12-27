import * as React from "react";
import "./project.css";

import { Stack, Box, Container, IconButton, Typography } from "@mui/material";
import { ChevronLeftRounded } from "@mui/icons-material";

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

const ProjectTemplate = ({ closeProject, project }) => {
	return (
		<main>
			<Box sx={{ minHeight: "100vh", backgroundColor: "#fbfbfb" }} py={2}>
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
