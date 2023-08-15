import React from "react";
import MUIAppBar from "../components/MUIAppBar";
import InputField from "../components/InputField";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <MUIAppBar />

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InputField />
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
