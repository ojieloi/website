import * as React from "react";
import "./borderedTextBlock.css";
import { motion } from "framer-motion";

// comps
import { BodyText, SubheaderText, SubBodyText } from "../../styledComponents";
import { Stack } from "@mui/material";
import { Colors } from "../../colors/colors";

const BorderedTextBlock = ({ data }) => {
	const subheaderContent = data.subheader.map((item, index) => (
		<SubBodyText key={index} color={Colors.brownHeaderText}>
			{item}
		</SubBodyText>
	));

	return (
		<section
			className="bordered-text-block"
			style={{
				border: data.bdColor ? data.bdColor + "0.25rem solid" : "none",
				alignItems: data.alignItems ? data.alignItems : "flex-start",
				textAlign: data.alignItems ? data.alignItems : "left",
			}}
		>
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<SubheaderText color={data.color}>{data.header}</SubheaderText>
			</motion.div>

			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Stack
					direction={"column"}
					flexWrap={"wrap"}
					justifyContent={"center"}
					spacing={2}
				>
					{subheaderContent}
				</Stack>
			</motion.div>

			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<BodyText
					style={{ marginTop: 10, textAlign: data.alignItems }}
					color={Colors.brownBodyText}
				>
					{data.content}
				</BodyText>
			</motion.div>
		</section>
	);
};

export default BorderedTextBlock;
