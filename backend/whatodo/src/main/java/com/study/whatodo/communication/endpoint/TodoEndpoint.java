package com.study.whatodo.communication.endpoint;

import com.study.whatodo.communication.dto.TodoRequestDTO;
import com.study.whatodo.persistence.model.Todo;
import com.study.whatodo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/todos")
public class TodoEndpoint {
    private final TodoService todoService;

    @Autowired
    public TodoEndpoint(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping("/save")
    public Todo saveTodo(@RequestBody TodoRequestDTO todoRequestDTO) {
      Todo todo = new Todo(todoRequestDTO.getText());
      return todoService.save(todo);
    }
}
