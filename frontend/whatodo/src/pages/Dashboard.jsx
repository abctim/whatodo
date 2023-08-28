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
          minHeight: "100vh",
        }}
      >
        <MUIAppBar />

        <Box
          sx={{
            position: "relative",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "20%",
              transform: "translateY(-50%)",
              width: "100%",
              textAlign: "center",
            }}
          >
            <InputField addTodo={addTodo} />
          </Box>

          <Box mt={35}>
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
