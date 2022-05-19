import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/addTodoForm.css";
import { TodoActionTypes } from "../types";

const idGenerator = () => `id${Math.random().toString(16).slice(2)}`;

const AddTodoForm: React.FC = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const handelNewTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
    setErrorMessage("");
  };

  const handelNewDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewDescription(event.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newTitle === "") {
      setErrorMessage("Title should not be blank!");
      return;
    }

    const newTodo = {
      id: idGenerator(),
      title: newTitle,
      description: newDescription,
      isDone: false,
    };

    dispatch({ type: TodoActionTypes.AddTodo, payload: newTodo });

    setNewDescription("");
    setNewTitle("");
  };

  return (
    <div>
      <form id="form" className="form__container" onSubmit={addTodo}>
        {errorMessage && (
          <label className="form__label-error-hidden" id="errorLabel">
            {errorMessage}
          </label>
        )}
        <input
          type="text"
          className="form__input-title"
          id="txtTodoItemToAdd"
          placeholder="Add new task"
          value={newTitle}
          onChange={handelNewTitle}
        />
        <input
          type="text"
          className="form__input-description"
          id="inputDescription"
          placeholder="description"
          value={newDescription}
          onChange={handelNewDescription}
        />
        <input
          type="submit"
          className="form__input-add"
          value="Add todo"
          id="btnAddTodo"
        />
      </form>
    </div>
  );
};

export default AddTodoForm;
