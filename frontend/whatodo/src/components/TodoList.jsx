import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";

const TodoList = ({ todos }) => {
  const [checked, setChecked] = useState({}); // Using an object to keep track of individual checkboxes

  const handleCheckBoxClick = (id) => (event) => {
    setChecked({
      ...checked,
      [id]: event.target.checked,
    });
  };

  return (
    <div>
      <Box
        sx={{
          width: "50vw",
          bgcolor: "background.paper",
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            {todos.map((todo) => (
              <ListItem key={todo.id} disablePadding>
                <Checkbox
                  checked={checked[todo.id] || false}
                  onChange={handleCheckBoxClick(todo.id)}
                />
                <ListItemText primary={todo.text} />
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
          
        </nav>
      </Box>
    </div>
  );
};

export default TodoList;
