import * as React from "react";

// components
import { Stack, Link, Typography, Box } from "@mui/material";
import { Colors } from "../../colors/colors";

const Navbar = () => {
  return (
    <Box pb={"50px"}>
      <nav>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}>
        {/* links */}
        {/* ..home */}
        <Link
          component={"a"}
          href=""
          sx={{ fontSize: "32px", fontWeight: "900", color: Colors.black }}
          underline="none">
          Ik.
        </Link>

        {/* ..current page */}
        <Typography
          component={"p"}
          sx={{ fontSize: "14px", fontWeight: "900", color: Colors.gray }}>
          About Me
        </Typography>
      </Stack>
    </nav>
    </Box>
  );
};

export default Navbar;
