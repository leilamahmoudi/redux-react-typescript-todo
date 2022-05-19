import React, { useEffect } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import "./styles/reset.css";
import { useStore } from "react-redux";

const App = () => {
  const store = useStore();

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      const todosData = localStorage.getItem("todosData");
      window.localStorage.setItem(
        "todosData",
        JSON.stringify(todosData ? store.getState().todos : [])
      );
    });
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">My Todo List!</h1>
      </header>
      <TodoList />
    </div>
  );
};

export default App;
