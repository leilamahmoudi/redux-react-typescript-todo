const assert = require("assert");

describe("todo functional tests", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("http://localhost:3000");
  });
  afterEach(() => {
    cy.clearLocalStorage();
  });

  it("page loads properly", () => {
    // act
    cy.visit("http://localhost:3000");
  });

  it("creates a new todo", () => {
    // arrange
    const title = "A demo title for a todo";

    // act
    cy.get('input[id="txtTodoItemToAdd"]').type(title);
    cy.get('[id="btnAddTodo"]').click();

    // assert
    cy.get('[id="todoList"]').should("have.length", 1);
    cy.get('[id="todoList"]').contains(title);
  });

  it("completes a todo", () => {
    // arrange
    const title =
      "A title at " + new Date().getSeconds() + new Date().getMilliseconds();
    cy.get('input[id="txtTodoItemToAdd"]').type(title);
    cy.get('[id="btnAddTodo"]').click();

    // act
    cy.get(".todo--toggle-completed").click();
    cy.get('[id="todoList"]')
      .children()
      .first()
      .should("have.class", "todo--completed");

    cy.get(".todo--toggle-completed").click();
    cy.get('[id="todoList"]')
      .children()
      .first()
      .should("not.have.class", "todo--completed");
  });

  it("creates 2 new todo", () => {
    // arrange
    const title1 = "A demo title for a todo";
    const title2 = "Another demo title for a todo";

    // act
    cy.get('input[id="txtTodoItemToAdd"]').type(title1);
    cy.get('[id="btnAddTodo"]').click();

    cy.get('input[id="txtTodoItemToAdd"]').type(title2);
    cy.get('[id="btnAddTodo"]').click();

    // assert
    cy.get('[id="todoList"]').children().should("have.length", 2);
    cy.get('[id="todoList"]').contains(title1);
    cy.get('[id="todoList"]').contains(title2);
  });

  it("show error if no title", () => {
    // act
    cy.get('[id="btnAddTodo"]').click();

    // assert
    cy.get('[id="todoList"]').children().should("have.length", 0);
    cy.get('[id="errorLabel"]').should("be.visible");
    cy.get('[id="errorLabel"]').contains("Title should not be blank!");
  });

  it("mark a todo as done", () => {
    // arrange
    const title = "A demo title for a todo";

    // act
    cy.get('input[id="txtTodoItemToAdd"]').type(title);
    cy.get('[id="btnAddTodo"]').click();

    cy.get('ul[id="todoList"]').children().first().click();

    // assert
    cy.get('ul[id="todoList"]').children().should("have.length", 1);

    cy.get('ul[id="todoList"]')
      .children()
      .first()
      .should("have.class", "todo--completed");

    cy.get('[class="todo__button--remove"]').should("have.length", 1);
    cy.get('[class="todo__button--remove"]').should("be.visible");
  });

  it("mark a done todo as undone", () => {
    // arrange
    const title = "A demo title for a todo";

    // act
    cy.get('input[id="txtTodoItemToAdd"]').type(title);
    cy.get('[id="btnAddTodo"]').click();

    cy.get('ul[id="todoList"]').children().first().click();
    cy.get('ul[id="todoList"]').children().first().click();

    // <assert
    cy.get('ul[id="todoList"]')
      .children()
      .first()
      .should("not.have.class", "todo--completed");

    cy.get('[class="todo__button--remove"]').should("have.length", 0);
  });

  it("remove a todo", () => {
    // arrange
    const title = "A demo title for a todo";
    // act
    cy.get('input[id="txtTodoItemToAdd"]').type(title);
    cy.get('[id="btnAddTodo"]').click();

    cy.get('ul[id="todoList"]').children().first().click();

    cy.get('[class="todo__button--remove"]').first().click();

    // assert
    cy.get('ul[id="todoList"]').children().should("have.length", 0);
  });
});
