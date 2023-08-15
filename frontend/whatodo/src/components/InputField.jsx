import React from "react";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddTaskIcon from "@mui/icons-material/AddTask";

const InputField = () => {
  return (
    <div>
      <TextField id="outlined-basic" label="Enter what you want to do" variant="outlined" />

      <IconButton color="primary" aria-label="add to shopping cart">
        <AddTaskIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default InputField;
