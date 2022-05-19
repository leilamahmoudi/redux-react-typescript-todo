export interface Todo {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

export interface TodoAction {
  type: TodoActionTypes;
  payload: Todo;
}

export enum TodoActionTypes {
  AddTodo = "ADD_TODO",
  RemoveTodo = "REMOVE_TODO",
  UpdateTodo = "UPDATE_TODO",
}
