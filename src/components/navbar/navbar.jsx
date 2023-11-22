import * as React from "react";

// components
import { Stack, Link, Typography, Box, Container } from "@mui/material";
import { Colors } from "../../colors/colors";

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
            component={"a"}
            href=""
            sx={{ fontSize: "32px", fontWeight: "900", color: Colors.blueHeaderText }}
            underline="none"
          >
            Ik.
          </Link>

          {/* ..current page */}
          <Typography
            component={"p"}
            sx={{ fontSize: "14px", fontWeight: "900", color: Colors.gray }}
          >
            About Me
          </Typography>
        </Stack>
      </Container>
    </nav>
  );
};

export default Navbar;
