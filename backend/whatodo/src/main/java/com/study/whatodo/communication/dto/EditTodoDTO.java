package com.study.whatodo.communication.dto;

public class EditTodoDTO {
    private Long id;
    private String text;

    public Long getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return "EditTodoDTO{" +
                "id=" + id +
                ", text='" + text + '\'' +
                '}';
    }
}
