import React, { useState } from "react";
import MUIAppBar from "../components/MUIAppBar";
import InputField from "../components/InputField";
import TodoList from "../components/TodoList";
import { Box } from "@mui/material";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((previousTodos) => [newTodo, ...previousTodos]);
  };

  const deleteTodo = (idToDelete) => {
    setTodos((previousTodos) =>
      previousTodos.filter((todo) => todo.id !== idToDelete)
    );
  };

  const editTodo = (id, newText) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <MUIAppBar />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 25,
          width: "100%",
        }}
      >
        <InputField addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
