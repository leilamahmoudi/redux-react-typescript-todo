import { createStore, combineReducers } from "redux";
import { todosReducer } from "../reducers/todos";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;
