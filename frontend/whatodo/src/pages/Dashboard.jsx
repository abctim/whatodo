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

  const deleteTodo = (idToDelete) => {
    setTodos((previousTodos) => previousTodos.filter(todo => todo.id !== idToDelete));
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
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </Box>
    </div>
  );
};

export default Dashboard;
