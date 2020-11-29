window.onload = () => {
  const form = document.getElementById("to-do-form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById("to-do");
    const todoText = todo.value;
    todo.value = "";
    console.log(todoText);
  };
};
