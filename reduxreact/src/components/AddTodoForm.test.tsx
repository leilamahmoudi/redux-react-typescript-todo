import React from "react";
import { render, screen } from "@testing-library/react";
import AddTodoForm from "./AddTodoForm";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore([]);
const store = mockStore({ todos: [] });

test("renders add todo form", () => {
  render(
    <Provider store={store}>
      <AddTodoForm />
    </Provider>
  );
  const todoItemElement = screen.getByText(/Add todo/i);
  expect(todoItemElement).toBeInTheDocument();
});

test("renders correctly", () => {
  const tree = render(
    <Provider store={store}>
      <AddTodoForm />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
