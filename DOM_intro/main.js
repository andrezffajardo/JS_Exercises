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
    const elements = document.querySelectorAll("#todo-list li");
    elements.forEach((element, i) => {
      element.addEventListener("click", () => {
        element.parentNode.removeChild(element);
      });
    });
  };
};
