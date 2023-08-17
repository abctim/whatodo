package com.study.whatodo.communication.endpoint;

import com.study.whatodo.communication.dto.TodoRequestDTO;
import com.study.whatodo.persistence.model.Todo;
import com.study.whatodo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public Todo saveTodo(@RequestBody TodoRequestDTO todoRequestDTO) {
      Todo todo = new Todo(todoRequestDTO.getText());
      return todoService.save(todo);
    }

    @CrossOrigin
    @GetMapping("/get-all")
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }
}
