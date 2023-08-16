package com.study.whatodo.communication.endpoint;

import com.study.whatodo.communication.dto.TodoRequestDTO;
import com.study.whatodo.persistence.model.Todo;
import com.study.whatodo.service.TodoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

public class TodoEndpointTest {

    @InjectMocks
    private TodoEndpoint todoEndpoint;

    @Mock
    private TodoService todoService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void saveTodoTest() {
        // Arrange
        String text = "Study for the test";
        TodoRequestDTO requestDTO = new TodoRequestDTO();
        requestDTO.setText(text);
        Todo todo = new Todo(text);
        when(todoService.save(any(Todo.class))).thenReturn(todo); // Using any() matcher

        // Act
        Todo result = todoEndpoint.saveTodo(requestDTO);

        // Assert
        assertEquals(todo, result);
    }
}

/*TODO refactor and really understand the test*/