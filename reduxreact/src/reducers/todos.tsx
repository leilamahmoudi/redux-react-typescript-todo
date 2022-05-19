import { Todo, TodoAction, TodoActionTypes } from "../types";

const initialTodoesData = () => {
  const todosData = localStorage.getItem("todosData");
  let initialValue;
  if (todosData) {
    initialValue = JSON.parse(todosData);
  }
  return initialValue || [];
};

const initialState: Array<Todo> = initialTodoesData();

export const todosReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionTypes.AddTodo:
      return [...state, action.payload];

    case TodoActionTypes.UpdateTodo:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });

    case TodoActionTypes.RemoveTodo:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};
