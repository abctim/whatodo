import React, { useState } from "react";
import MUIAppBar from "../components/MUIAppBar";
import InputField from "../components/InputField";
import TodoList from "../components/TodoList";
import { Box } from "@mui/material";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((previousTodos) => [...previousTodos, newTodo]);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - 64px)",
          alignItems: "center",
          justifyContent: "center",
          marginTop: -20,
        }}
      >
        <MUIAppBar />
        <InputField addTodo={addTodo} />
        <TodoList todos={todos} />
      </Box>
    </div>
  );
};

export default Dashboard;
