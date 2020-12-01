const todos = JSON.parse(localStorage.getItem("todos")) || [];

const render = () => {
  const todoList = document.getElementById("todo-list");
  const todosTemplate = todos.map((t) => "<li>" + t + "</li>");
  todoList.innerHTML = todosTemplate.join("");
  const elements = document.querySelectorAll("#todo-list li");
  elements.forEach((element, i) => {
    element.addEventListener("click", () => {
      element.parentNode.removeChild(element);
      todos.splice(i, 1);
      updateTodos(todos);
      render();
    });
  });
};

const updateTodos = (todos) => {
  const todoStrings = JSON.stringify(todos);
  localStorage.setItem("todos", todoStrings);
};

window.onload = () => {
  render();
  const form = document.getElementById("to-do-form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById("to-do");
    const todoText = todo.value;
    todo.value = "";
    todos.push(todoText);
    updateTodos(todos);
    render();
  };
};
