import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from '@mui/icons-material/Edit';

const TodoList = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckBoxClick = (event) => {
    setChecked(event.target.checked);
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
            <ListItem disablePadding>
              <Checkbox checked={checked} onChange={handleCheckBoxClick} />
              <ListItemText primary="This is your first todo" />
              <IconButton edge="end" aria-label="edit">
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
      </Box>
    </div>
  );
};

export default TodoList;
