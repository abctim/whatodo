package com.study.whatodo.communication.endpoint;

import com.study.whatodo.persistence.model.Todo;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/todos")
public class TodoEndpoint {
    @PostMapping("/save")
    public Todo saveTodo(@RequestBody String text) {
      Todo todo = new Todo();
      todo.setText(text);
      return todo; //placeholder for commit
    }
}
