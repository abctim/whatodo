import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import axios from "axios";

const InputField = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    console.log(inputValue);

    axios
      .post("http://localhost:8080/todos/save", {
        text: inputValue,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Enter what you want to do"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
        sx={{ width: "50vw" }}
      />

      <Button
        variant="contained"
        sx={{ height: "56px" }}
        color="primary"
        aria-label="add to todo list"
        onClick={handleClick}
      >
        <AddTaskIcon fontSize="large" />
      </Button>
    </div>
  );
};

export default InputField;
