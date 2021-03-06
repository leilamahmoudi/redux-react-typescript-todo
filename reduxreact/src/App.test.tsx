import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore([]);
const store = mockStore({ todos: [] });

test.only("renders my todo list", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const element = screen.getByText(/my todo list!/i);
  expect(element).toBeInTheDocument();
});
