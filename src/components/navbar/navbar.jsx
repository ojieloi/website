import * as React from "react";

// components
import { Stack, Link, Container } from "@mui/material";
import { Colors } from "../../colors/colors";
import { navigate } from "gatsby";
import { SubBodyText } from "../../styledComponents";

const Navbar = () => {
	return (
		<nav>
			<Container sx={{ py: 4 }}>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					spacing={1}
				>
					{/* links */}
					{/* ..home */}
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

					{/* ..current page */}
					<Link
						component={"button"}
						onClick={() => {
							navigate("/project");
						}}
            sx={{ textDecoration: "none" }}
					>
						<SubBodyText>Projects</SubBodyText>
					</Link>
				</Stack>
			</Container>
		</nav>
	);
};

export default Navbar;
