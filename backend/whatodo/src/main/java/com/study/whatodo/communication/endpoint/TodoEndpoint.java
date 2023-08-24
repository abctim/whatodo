package com.study.whatodo.communication.endpoint;

import com.study.whatodo.communication.dto.DeleteTodoDTO;
import com.study.whatodo.communication.dto.SaveTodoDTO;
import com.study.whatodo.persistence.model.Todo;
import com.study.whatodo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
public class TodoEndpoint {
    private final TodoService todoService;

    @Autowired
    public TodoEndpoint(TodoService todoService) {
        this.todoService = todoService;
    }

    @CrossOrigin
    @PostMapping("/save")
    public Todo saveTodo(@RequestBody SaveTodoDTO saveTodoDTO) {
      Todo todo = new Todo(saveTodoDTO.getText());
      return todoService.save(todo);
    }

    @CrossOrigin
    @GetMapping("/get-all")
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @CrossOrigin
    @GetMapping("/delete")
    public ResponseEntity<Void> deleteTodo(@RequestBody DeleteTodoDTO deleteTodoDTO) {
        try {
            todoService.deleteTodo(deleteTodoDTO.getId());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (EmptyResultDataAccessException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
