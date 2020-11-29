const todos = [];

window.onload = () => {
  const form = document.getElementById("to-do-form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById("to-do");
    const todoText = todo.value;
    todo.value = "";
    todos.push(todoText);
    const todoList = document.getElementById("todo-list");
    const todosTemplate = todos.map((t) => "<li>" + t + "</li>");
    todoList.innerHTML = todosTemplate.join("");
  };
};
