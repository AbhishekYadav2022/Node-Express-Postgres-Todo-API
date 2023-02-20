CREATE DATABASE postgres_todo;

CREATE TABLE
    todo(
        todo_id serial PRIMARY KEY,
        description VARCHAR(255)
    );