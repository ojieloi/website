import * as React from "react";
import "./borderedListBlock.css";

// comps
import { BodyText, SubBodyHeaderText } from "../../styledComponents";
import { Stack } from "@mui/material";
import { motion, useMotionValue, useTransform, Variants } from "framer-motion";

// interfaces
import ListItem from "../interfaces/ListItem";
import { Colors } from "../../colors/colors";
import { StaticImage } from "gatsby-plugin-image";

// icons
import {
	AssignmentRounded,
	CheckCircle,
	ConnectWithoutContactRounded,
	DesignServicesRounded,
	GitHub,
} from "@mui/icons-material";

// motion
import { ListItemVariants, SimpleAppearVariants } from "../../framer-motion";

const BorderedListBlock: React.FC<ListItem> = ({
	color,
	header,
	items,
	id,
}: ListItem) => {
	// images
	const imageToShow = () => {
		switch (id) {
			case "dev":
				return (
					<div className="list-image-wrapper">
						<motion.div
							style={{
								cursor: "grab",
							}}
							drag
							dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
							dragElastic={0.6}
							whileTap={{ cursor: "grabbing" }}
						>
							<StaticImage
								src="../../images/devSkill.png"
								alt="developer"
								placeholder="blurred"
							/>
						</motion.div>
					</div>
				);

			case "des":
				return (
					<div className="list-image-wrapper">
						<StaticImage
							src="../../images/desSkill.png"
							alt="design"
							placeholder="blurred"
						/>
					</div>
				);

			case "softSkills":
				break;

			case "goals":
				break;
		}
	};

	// icons
	const iconToShow = () => {
		switch (id) {
			case "dev":
				return <GitHub fontSize={"large"} htmlColor={Colors.greenHeaderText} />;

			case "des":
				return (
					<DesignServicesRounded
						fontSize={"large"}
						htmlColor={Colors.greenHeaderText}
					/>
				);

			case "softSkills":
				return (
					<ConnectWithoutContactRounded
						fontSize={"large"}
						htmlColor={Colors.greenHeaderText}
					/>
				);

			case "goals":
				return (
					<AssignmentRounded
						fontSize={"large"}
						htmlColor={Colors.greenHeaderText}
					/>
				);
		}
	};

	return (
		<section className="bordered-list-block">
			<Stack direction={"column"} gap={2}>
				<Stack direction={"row"} spacing={2} alignItems={"center"}>
					{/* header icon */}
					{iconToShow()}

					{/* header text */}
					{header?.map((item, index) => (
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
							<SubBodyHeaderText color={Colors.greenHeaderText} key={index}>
								{item}
							</SubBodyHeaderText>
						</motion.div>
					))}
				</Stack>

				{/* list content */}
				<Stack direction={"row"} gap={2} flexWrap={"wrap"}>
					{items?.map((item, index) => (
						<motion.div
							variants={ListItemVariants}
							initial="initial"
							whileInView="animate"
							key={index}
							custom={index}
						>
							<Stack direction={"row"} gap={1} alignItems={"center"}>
								<CheckCircle htmlColor={Colors.greenBodyText} />
								<BodyText color={Colors.greenBodyText}>{item}</BodyText>
							</Stack>
						</motion.div>
					))}
				</Stack>
			</Stack>

			{/* image */}
			<motion.div
				className="motion-img-wrapper"
				style={{
					cursor: "grab",
				}}
				drag
				dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
				dragElastic={0.6}
				whileTap={{ cursor: "grabbing" }}
				variants={SimpleAppearVariants}
				initial="initial"
				whileInView="animate"
				viewport={{
					once: true,
				}}
			>
				{imageToShow()}
			</motion.div>
		</section>
	);
};

export default BorderedListBlock;
