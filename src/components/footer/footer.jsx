import React from "react";
import "./footer.css";
import { navigate } from "gatsby";
import {
	Box,
	Container,
	Link,
	Stack,
} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Colors } from "../../colors/colors";

const Footer = () => {
	return (
		<Box p={4}>
			<Container maxWidth="lg">
				<Stack
					direction={"row"}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					{/* name / copyright */}
					<Link
						component={"button"}
						onClick={() => {
							navigate("/");
						}}
						sx={{
							fontSize: "32px",
							fontWeight: "900",
							color: Colors.blueHeaderText,
						}}
						underline="none"
					>
						Ik.
					</Link>

					{/* social links */}
					<Stack direction={"row"} alignItems={"center"} gap={2}>
						<Link
							className="footer-social-link"
							sx={{
								color: "#0077b5",
								"&:hover": {
									color: Colors.blackText,
									backgroundColor: Colors.grayBorder,
									border: "1px solid #e0e4e8",
								},
							}}
							component={"a"}
							href="https://linkedin.com/in/ikecojielo"
							target="_blank"
						>
							<LinkedIn />
						</Link>

						{/* Github */}
						<Link
							className="footer-social-link"
							sx={{
								color: "#6e5494",
								"&:hover": {
									color: Colors.blackText,
									backgroundColor: Colors.grayBorder,
									border: "1px solid #e0e4e8",
								},
							}}
							component={"a"}
							href="https://github.com/ojieloi"
							target="_blank"
						>
							<GitHub />
						</Link>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
