import * as React from "react";
import { Stack, Box, Container, IconButton } from "@mui/material";
import { ChevronLeftRounded } from "@mui/icons-material";

const ProjectTemplate = ({ closeProject, project }) => {
	console.log(project);

	return (
		<main>
			<Box sx={{ height: "100vh", backgroundColor: "#fbfbfb" }} py={2}>
				<Container maxWidth="lg">
					<Stack direction={"column"} gap={2}>
						{/* header */}
						<Box>
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

						{/* project images, etc */}
					</Stack>
				</Container>
			</Box>
		</main>
	);
};

export default ProjectTemplate;
