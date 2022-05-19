import React from "react";
import { render, screen } from "@testing-library/react";
import RemoveTodoBtn from "./RemoveTodoBtn";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore([]);
const store = mockStore({ todos: [] });

test("renders remove todo button", () => {
  render(
    <Provider store={store}>
      <RemoveTodoBtn todoId="test_id" />
    </Provider>
  );
  const todoItemElement = screen.getByText(/remove/i);
  expect(todoItemElement).toBeInTheDocument();
});

test("renders correctly", () => {
  const tree = render(
    <Provider store={store}>
      <RemoveTodoBtn todoId="test_id" />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
