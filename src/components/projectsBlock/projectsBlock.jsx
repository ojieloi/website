import * as React from "react";
import "./projectsBlock.css";

import { Colors } from "../../colors/colors";
import { Box, Container, Stack, IconButton } from "@mui/material";
import {
	BodyText,
	SubBodyHeaderText,
	SubBodyText,
	SubheaderText,
} from "../../styledComponents";

import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import {
	ArrowDownwardRounded,
	ArrowOutwardRounded,
	ArrowUpwardRounded,
	RefreshRounded,
} from "@mui/icons-material";

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

const ProjectsBlock = ({ openProject, data, setProject }) => {
	const [activeStep, setActiveStep] = React.useState(0);

	// go to next project
	const handleNext = () => {
		if (activeStep < data.content.length - 1) {
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
		} else {
			setActiveStep(0);
		}
	};

	// go to previous project
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	// open project in detail
	const handleExternalClick = (item) => {
		openProject(true);
		setProject(item);
	};

	return (
		<Box py={20}>
			<Container maxWidth="lg">
				<section className="resume-block">
					<Stack direction={"column"} gap={5}>
						<SubheaderText color={Colors.blackText}>
							{data.header}
						</SubheaderText>

						<Stepper orientation="vertical" activeStep={activeStep}>
							{data.content.map((item, index) => {
								return (
									<Step key={index}>
										<StepLabel>
											<div className="resume-header">
												{/* name */}
												<Stack direction={"row"} gap={2} alignItems={"center"}>
													<SubBodyHeaderText color={Colors.blackText}>
														{item.name}
													</SubBodyHeaderText>

													{/* open external link */}
													{index === activeStep ? (
														<LightTooltip title="More about this project">
															<IconButton
																variant="filledTonal"
																onClick={() => {
																	handleExternalClick(item);
																}}
															>
																<ArrowOutwardRounded />
															</IconButton>
														</LightTooltip>
													) : null}
												</Stack>

												<div>
													{/* type */}
													<SubBodyHeaderText
														color={Colors.blueBodyText}
														id="position"
													>
														{item.type}
													</SubBodyHeaderText>

													{/* start - end dates */}
													{/* <SubBodyText color={Colors.brownBodyText} id="period">
														{item.period.startDate
															? item.period.startDate
															: null}

														{item.period.endDate
															? ` - ${item.period.endDate}`
															: null}
													</SubBodyText> */}
												</div>
											</div>
										</StepLabel>

										<StepContent>
											{item.description ? (
												<div className="resume-content">
													{/* content */}
													<BodyText id="content" color={Colors.blueBodyText}>
														{item.description}
													</BodyText>

													{/* <Stack direction={"column"} gap={4}>
														{item.content.map((content, contentIndex) => {
															return (
																<BodyText
																	id="content"
																	key={contentIndex}
																	color={Colors.blueBodyText}
																>
																	{content}
																</BodyText>
															);
														})}
													</Stack> */}
												</div>
											) : null}

											{/* <Box pt={item.content ? 5 : 0} px={item.content ? 2 : 0}> */}
											<Box mt={2}>
												<div>
													{/* go down */}
													<LightTooltip
														title={
															index === data.content.length - 1
																? "Restart"
																: "Next"
														}
													>
														<IconButton
															variant="filledTonal"
															onClick={handleNext}
														>
															{index === data.content.length - 1 ? (
																<RefreshRounded />
															) : (
																<ArrowDownwardRounded />
															)}
														</IconButton>
													</LightTooltip>

													{/* go up */}
													{index > 0 ? (
														<LightTooltip title="Back">
															<IconButton
																disabled={index === 0}
																onClick={handleBack}
																sx={{ ml: 1 }}
															>
																<ArrowUpwardRounded />
															</IconButton>
														</LightTooltip>
													) : null}
												</div>
											</Box>
										</StepContent>
									</Step>
								);
							})}
						</Stepper>
					</Stack>
				</section>
			</Container>
		</Box>
	);
};

export default ProjectsBlock;
