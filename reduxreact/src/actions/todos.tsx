import { Todo, TodoActionTypes } from "../types";

export const addTodo = (payload: Todo) => {
  return {
    type: TodoActionTypes.AddTodo,
    payload,
  };
};

export const updateTodo = (payload: Todo) => {
  return {
    type: TodoActionTypes.UpdateTodo,
    payload,
  };
};

export const removeTodo = (payload: Todo) => {
  return {
    type: TodoActionTypes.RemoveTodo,
    payload,
  };
};
