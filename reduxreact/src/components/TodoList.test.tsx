import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore([]);
const store = mockStore({ todos: [] });

test("renders todo list", () => {
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
  const todoListElement = screen.getByText(/what do you need to do today?/i);
  expect(todoListElement).toBeInTheDocument();
});

test("renders correctly", () => {
  const tree = render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
