import * as React from "react";
import "./resumeBlock.css";

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

const ResumeBlock = ({ data }) => {
	const resumeData = data.content;
	const [activeStep, setActiveStep] = React.useState(0);

	// go to next project
	const handleNext = () => {
		if (activeStep < resumeData.length - 1) {
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
	const handleExternalClick = (url) => {
		window.open(url, "_blank");
	};

	console.log(data);

	return (
		<Box py={20}>
			<Container maxWidth="lg">
				<section className="resume-block">
					<Stack direction={"column"} gap={5}>
						<SubheaderText color={Colors.blackText}>
							{data.header}
						</SubheaderText>

						<Stepper orientation="vertical" activeStep={activeStep}>
							{resumeData.map((item, index) => {
								return (
									<Step key={index}>
										<StepLabel>
											<div className="resume-header">
												{/* company */}
												<Stack direction={"row"} gap={2} alignItems={"center"}>
													<SubBodyHeaderText color={Colors.blackText}>
														{item.company}
													</SubBodyHeaderText>

													{/* open external link */}
													{index === activeStep ? (
														<LightTooltip title="Open in new tab">
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
													{/* position */}
													<SubBodyHeaderText
														color={Colors.blueBodyText}
														id="position"
													>
														{item.position}
													</SubBodyHeaderText>

													{/* start - end dates */}
													<SubBodyText color={Colors.brownBodyText} id="period">
														{item.startDate ? item.startDate : null}

														{item.endDate ? ` - ${item.endDate}` : null}
													</SubBodyText>
												</div>
											</div>
										</StepLabel>

										<StepContent>
											{item.content ? (
												<div className="resume-content">
													{/* content */}
													<Stack direction={"column"} gap={4}>
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
													</Stack>
												</div>
											) : null}

											<Box pt={item.content ? 5 : 0} px={item.content ? 2 : 0}>
												<div>
													{/* go down */}
													<LightTooltip
														title={
															index === resumeData.length - 1
																? "Restart"
																: "Next"
														}
													>
														<IconButton
															variant="filledTonal"
															onClick={handleNext}
														>
															{index === resumeData.length - 1 ? (
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

export default ResumeBlock;
