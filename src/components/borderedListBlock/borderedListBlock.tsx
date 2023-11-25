import * as React from "react";
import "./borderedListBlock.css";

// comps
import { BodyText, SubBodyHeaderText } from "../../styledComponents";
import { Stack } from "@mui/material";

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
						<StaticImage
							src="../../images/devSkill.png"
							alt="developer"
              placeholder="blurred"
						/>
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
						<SubBodyHeaderText color={Colors.greenHeaderText} key={index}>
							{item}
						</SubBodyHeaderText>
					))}
				</Stack>

				{/* list content */}
				<Stack direction={"row"} gap={2} flexWrap={"wrap"}>
					{items?.map((item, index) => (
						<Stack direction={"row"} gap={1} alignItems={"center"} key={index}>
							<CheckCircle htmlColor={Colors.greenBodyText} />
							<BodyText color={Colors.greenBodyText}>{item}</BodyText>
						</Stack>
					))}
				</Stack>
			</Stack>

			{/* image */}
			{imageToShow()}
		</section>
	);
};

export default BorderedListBlock;
