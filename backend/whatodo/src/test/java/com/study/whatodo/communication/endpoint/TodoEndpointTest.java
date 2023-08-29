package com.study.whatodo.communication.endpoint;

import com.study.whatodo.communication.dto.DeleteTodoDTO;
import com.study.whatodo.communication.dto.SaveTodoDTO;
import com.study.whatodo.persistence.model.Todo;
import com.study.whatodo.service.TodoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doThrow;
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
        SaveTodoDTO requestDTO = new SaveTodoDTO();
        requestDTO.setText(text);
        Todo todo = new Todo(text);
        when(todoService.save(any(Todo.class))).thenReturn(todo); // Using any() matcher

        // Act
        Todo result = todoEndpoint.saveTodo(requestDTO);

        // Assert
        assertEquals(todo, result);
    }

    @Test
    public void getAllTodos() {
        // Arrange
        List<Todo> todoList = Arrays.asList(new Todo("First Test"), new Todo("Second Test"));
        when(todoService.getAllTodos()).thenReturn(todoList);

        // Act
        List<Todo> result = todoEndpoint.getAllTodos();

        // Assert
        assertEquals(todoList.size(), result.size());
    }

    @Test
    void deleteTodo() {
        // Arrange
        DeleteTodoDTO deleteTodoDTO = new DeleteTodoDTO();
        deleteTodoDTO.setId(1L);

        // Act and Assert
        assertEquals(HttpStatus.NO_CONTENT, todoEndpoint.deleteTodo(deleteTodoDTO).getStatusCode());

        // Mock throwing an exception
        doThrow(EmptyResultDataAccessException.class).when(todoService).deleteTodo(1L);

        // Act & Assert
        assertEquals(HttpStatus.NOT_FOUND, todoEndpoint.deleteTodo(deleteTodoDTO).getStatusCode());
    }

    @Test
    void editTodo() {
    }
}