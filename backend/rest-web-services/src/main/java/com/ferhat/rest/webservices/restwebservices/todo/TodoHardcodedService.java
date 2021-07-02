package com.ferhat.rest.webservices.restwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList();
    private static long idCounter = 0;

    static {

        todos.add(new Todo(++idCounter, "Ferhat", "Learn Angular", new Date(), true));
        todos.add(new Todo(++idCounter, "Ferhat", "Learn Java", new Date(), false));
        todos.add(new Todo(++idCounter, "Ferhat", "Learn AWS Cloud", new Date(), false));
    }

    public List<Todo> findAll() {

        return todos;
    }

    public Todo save(Todo todo){
        if(todo.getId() == -1 || todo.getId() == 0){
            todo.setId(++idCounter);

        }else{
            deleteById(todo.getId());
        }
        todos.add(todo);
        return todo;
    }

    public Todo deleteById(long id) {

        Todo todo = findById(id);
        if (todo == null) return null;
        if (todos.remove(todo)) {
            return todo;
        }
        return null;
    }

    public Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                System.out.println("todo id is : "+todo.getId());
                return todo;
            }
        }
        System.out.println("No todo returned");
        return null;
    }
}
