package com.study.whatodo.communication.endpoint;

import com.study.whatodo.communication.dto.DeleteTodoDTO;
import com.study.whatodo.communication.dto.EditTodoDTO;
import com.study.whatodo.communication.dto.SaveTodoDTO;
import com.study.whatodo.persistence.model.Todo;
import com.study.whatodo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/todos")
public class TodoEndpoint {
    private final TodoService todoService;

    @Autowired
    public TodoEndpoint(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping("/save")
    public Todo saveTodo(@RequestBody SaveTodoDTO saveTodoDTO) {
      Todo todo = new Todo(saveTodoDTO.getText());
      return todoService.save(todo);
    }

    @GetMapping("/get-all")
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @DeleteMapping ("/delete")
    public ResponseEntity<Void> deleteTodo(@RequestBody DeleteTodoDTO deleteTodoDTO) {
        try {
            todoService.deleteTodo(deleteTodoDTO.getId());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (EmptyResultDataAccessException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/edit")
    public ResponseEntity<Todo> editTodo(@RequestBody EditTodoDTO editTodoDTO) {
        Optional<Todo> optionalTodo = todoService.findById(editTodoDTO.getId());
        if (optionalTodo.isPresent()) {
            Todo todo = optionalTodo.get();
            todo.setText(editTodoDTO.getText());
            todoService.save(todo);
            return ResponseEntity.ok(todo);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
