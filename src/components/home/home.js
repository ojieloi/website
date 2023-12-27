import * as React from "react";
import "./home.css";
import { motion } from "framer-motion";

// comps
import { Box, Container, Stack } from "@mui/material";
import Navbar from "../navbar/navbar";
import TextBlock from "../textBlock/textBlock";
import BorderedTextBlock from "../borderedTextBlock/borderedTextBlock";
import BorderedLinkBlock from "../borderedLinkBlock/borderedLinkBlock";
import BorderedListBlock from "../borderedListBlock/borderedListBlock";

// styled components
import { HeaderText } from "../../styledComponents";
import { Colors } from "../../colors/colors";
import ResumeBlock from "../resumeBlock/resumeBlock";

import useSWR from "swr";
import { client } from "../../../utils/contentful";

// fetch resume data
const fetcher = async () => {
	const fetchData = await client.getEntries({ content_type: "resume" });

	const resumeData = fetchData.items.map((data) => {
		const { fields } = data;

		return {
			company: fields.company,
			position: fields.position,
			startDate: fields.startDate,
			endDate: fields.endDate,
			externalLink: fields.externalLink,
			content: fields.content,
		};
	});

	return { resumeData };
};

const HomePage = () => {
	// fetch resume data
	const { data, error } = useSWR("contentful", fetcher);
	const resumeData = data?.resumeData;

	if (error) {
		console.error(error);
	}

	if (!resumeData) {
		console.error("No data");
	} else {
		return (
			<Stack direction={"column"} gap={2}>
				{/* page nav */}
				<Navbar />

				{/* home intro text */}
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<TextBlock />
				</motion.div>

				<motion.div
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Box sx={{ py: 20 }}>
						<Container maxWidth="lg">
							{/* education */}
							<BorderedTextBlock
								data={{
									color: Colors.brownHeaderText,
									alignItems: "center",
									header: "New York Institute of Technology",
									subheader: [
										"2016 - 2020",
										"Bachelors | Cum Laude, Computer Science",
									],
									content: `Graduated in the Spring of 2021 after spending the last year and a
                    half learning remotely due to COVID. Most of learning experiences
                    that have carried over, came from this last stretch where I took
                    upon multiple developement projects that honed my skills in this
                    industry I find myself working in currently.`,
								}}
							/>
						</Container>
					</Box>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 200 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Box py={20} sx={{ backgroundColor: Colors.greenPageBackground }}>
						<Container>
							<Stack direction={"column"} gap={15} alignItems={"center"}>
								<Container maxWidth="sm" sx={{ textAlign: "center" }}>
									<HeaderText color={Colors.greenHeaderText}>
										Some things I've learned along the way
									</HeaderText>
								</Container>

								<BorderedListBlock
									color={Colors.black}
									header={["Development"]}
									id="dev"
									items={[
										"Angular",
										"React",
										"Bloomreach",
										"Salesforce",
										"Firebase",
										"Git",
										"Testing & Debugging",
										"APIs",
										"Feature Developement & Improvement",
										"Application Developement",
									]}
								/>

								<BorderedListBlock
									color={Colors.black}
									header={["Design"]}
									id="des"
									items={[
										"Adobe XD",
										"Figma",
										"Invision Studio",
										"Visual & Responsive Design",
										"Wireframing",
										"Prototyping",
										"UI & UX Design",
									]}
								/>

								<BorderedListBlock
									color={Colors.black}
									header={["Soft Skills"]}
									id="softSkills"
									items={[
										"Communication",
										"Problem Solving",
										"Adaptability",
										"Visual Thinking",
										"Collaboration",
										"Leadership",
										"Patience",
										"Time Management",
									]}
								/>

								<BorderedListBlock
									color={Colors.black}
									header={["Goals"]}
									id="goals"
									items={[
										"Improve soft skills",
										"Freelancing",
										"Learn Swift UI",
									]}
								/>
							</Stack>
						</Container>
					</Box>
				</motion.div>

				{/* resume */}
				<ResumeBlock
					data={{
						header: "Resumé",
						content: resumeData,
					}}
				/>

				<Box sx={{ py: 10, backgroundColor: Colors.bluePageBackground }}>
					<Container>
						<div className="two-column-grid">
							{/* salesforce certification */}
							<BorderedTextBlock
								data={{
									bdColor: "#fff",
									color: Colors.blueHeaderText,
									header: "Salesforce Certified",
									subheader: ["Javascript Developer I"],
									content: `Completed the LWC Specialist super badge and passed the Javascript Developer I multiple choice proctored exam.`,
								}}
							/>

							{/* link to trailhead */}
							<BorderedLinkBlock
								data={{
									bdColor: Colors.blueBorder,
									color: Colors.blueHeaderText,
									header: "Salesforce Certified",
									subheader: ["Javascript Developer I"],
									content: `Completed the LWC Specialist super badge and passed the Javascript Developer I multiple choice proctored exam.`,
								}}
							/>
						</div>
					</Container>
				</Box>
			</Stack>
		);
	}
};

export default HomePage;
