import React, { useState } from "react";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddTaskIcon from "@mui/icons-material/AddTask";

const InputField = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    console.log(inputValue);
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Enter what you want to do"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
      />

      <IconButton
        color="primary"
        aria-label="add to todo list"
        onClick={handleClick}
      >
        <AddTaskIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default InputField;
