import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const NavBar = ({ lastUpdated }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="success" position="static">
        <Toolbar>
          <Typography variant="p">Last Updated: {lastUpdated}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
