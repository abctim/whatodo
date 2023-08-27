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
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - 64px)",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MUIAppBar />

        {/* Combined container for InputField and TodoList */}
        <Box
          sx={{
            position: "absolute",
            top: "50%", // Position at the center
            width: "100%", // Take full width
            px: 2,
          }}
        >
          <InputField addTodo={addTodo} />
          <Box mt={2}>
            <TodoList
              todos={todos}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
