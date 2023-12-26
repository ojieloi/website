import * as React from "react";
import { Stack, Box, Container, IconButton, Typography } from "@mui/material";
import { ChevronLeftRounded } from "@mui/icons-material";

// Texts
import { BodyText, HeaderText } from "../../styledComponents";

// Colors
import { Colors } from "../../colors/colors";

const ProjectTemplate = ({ closeProject, project }) => {
	console.log("Project dialog data", project[0]);

	const data = project[0];

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

						{/* project desc */}
						<Box py={10}>
							<Container maxWidth="md">
								<Stack direction={"column"} gap={4} textAlign={"center"}>
									<HeaderText color={Colors.black}>{data.name}</HeaderText>

									<BodyText color={Colors.brownBodyText}>{data.type}</BodyText>

									{/* <Typography variant={"h1"}>{data.company}</Typography> */}
									{/* <Typography variant={"p"}>{data.content}</Typography> */}
								</Stack>
							</Container>
						</Box>

						{/* project images, etc */}
						<Stack direction={"column"} gap={2}>
							{data.images.map((image, index) => (
								<img key={index} src={image.url} />
							))}
						</Stack>
					</Stack>
				</Container>
			</Box>
		</main>
	);
};

export default ProjectTemplate;
