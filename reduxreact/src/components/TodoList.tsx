import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";
import "../styles/todoList.css";
import { store } from "../store/todos";

export type RootState = ReturnType<typeof store.getState>;
export interface Todo {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

const TodoList: React.FC = () => {
  const todos = useSelector<RootState, Todo[]>((state) => state.todos);

  const unDoneTodos = todos.filter((item) => !item.isDone);
  const doneTodos = todos.filter((item) => item.isDone);

  const setTodos = () => {};

  return (
    <section className="todo__list">
      <h2 className="todo__list-title">What do you need to do today?</h2>
      <AddTodoForm />
      <ul id="todoList" className="list--container">
        {unDoneTodos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
        {doneTodos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      </ul>
    </section>
  );
};

export default TodoList;
