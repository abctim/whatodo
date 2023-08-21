import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import axios from "axios";
import { SAVE_TODO_URL } from "../data/apiConstants";

const InputField = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(SAVE_TODO_URL, {
        text: inputValue,
      })
      .then(function (response) {
        addTodo({
          text: response.data.text,
          id: response.data.id,
        });
        setInputValue("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Enter what you want to do"
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
          sx={{ width: "50vw" }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ height: "56px" }}
          color="primary"
          aria-label="add to todo list"
        >
          <AddTaskIcon fontSize="large" />
        </Button>
      </form>
    </div>
  );
};

export default InputField;
