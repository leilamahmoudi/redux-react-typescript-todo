import React from "react";
import { useDispatch } from "react-redux";
import "../styles/todoItem.css";
import { TodoActionTypes } from "../types";
import RemoveTodoBtn from "./RemoveTodoBtn";
import { Todo } from "./TodoList";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodo = () => {
    dispatch({
      type: TodoActionTypes.UpdateTodo,
      payload: {
        ...todo,
        isDone: !todo.isDone,
      },
    });
  };

  return (
    <li
      onClick={() => {
        toggleTodo();
      }}
      className={
        todo.isDone
          ? "todo--completed todo--toggle-completed"
          : "list__todo-item todo--toggle-completed"
      }
    >
      <p className="list__title">{todo.title}</p>
      <p className="list__description">{todo.description}</p>

      {todo.isDone && <RemoveTodoBtn todoId={todo.id} />}
    </li>
  );
};

export default TodoItem;
