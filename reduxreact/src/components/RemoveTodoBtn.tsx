import React from "react";
import { useDispatch } from "react-redux";
import "../styles/removeTodoBtn.css";
import { TodoActionTypes } from "../types";

interface Props {
  todoId: string;
}

const RemoveTodoBtn: React.FC<Props> = ({ todoId }) => {
  const dispatch = useDispatch();
  const removeTodo = () => {
    dispatch({ type: TodoActionTypes.RemoveTodo, payload: { id: todoId } });
  };
  return (
    <div>
      <button
        onClick={(evt) => {
          evt.stopPropagation();
          removeTodo();
        }}
        className="todo__button--remove"
      >
        Remove
      </button>
    </div>
  );
};

export default RemoveTodoBtn;
