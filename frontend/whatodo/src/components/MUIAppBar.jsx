import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const MUIAppBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <DoneOutlineIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography variant="h6" color="inherit" component="div">
              whatodo
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default MUIAppBar;
