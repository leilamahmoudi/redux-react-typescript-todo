import React from "react";
import { render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore([]);
const store = mockStore({ todos: [] });

test("renders todo item", () => {
  render(
    <Provider store={store}>
      <TodoItem
        todo={{
          id: "test_id",
          title: "test_title",
          description: "test_description",
          isDone: false,
        }}
        key="test_id"
      />
    </Provider>
  );
  const todoItemElement = screen.getByText(/test_title/i);
  expect(todoItemElement).toBeInTheDocument();
});

test("renders correctly", () => {
  const tree = render(
    <Provider store={store}>
      <TodoItem
        todo={{
          id: "test_id",
          title: "test_title",
          description: "test_description",
          isDone: false,
        }}
        key="test_id"
      />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
