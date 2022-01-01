const todos_json = [];
const completed_todos = [];
const pending_todos = [];
// fetching the json and extracting the data
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((entry) => {
      todos_json.push(entry);
      if (entry.completed == true) {
        completed_todos.push(entry.title);
      } else {
        pending_todos.push(entry.title);
      }
    });
  });

const all_tasks = document.querySelector(".all_todos");
const completed = document.querySelector(".completed_todos");
const pending = document.querySelector(".pending_todos");
const result = document.querySelector(".result");
const all_todos_div = document.querySelector(".all_todos_div");
const completed_todos_div = document.querySelector(".completed_todos_div");
const pending_todos_div = document.querySelector(".pending_todos_div");
//   Event Listeners
all_tasks.addEventListener("click", () => {
  todos_json.forEach((obj) => {
    const p_tag = document.createElement("p");
    p_tag.innerHTML = obj.title;
    if (obj.completed == true) {
      p_tag.style.color = "green";
    } else {
      p_tag.style.color = "yellow";
    }
    all_todos_div.appendChild(p_tag);
  });
});
completed.addEventListener("click", () => {
  completed_todos.forEach((data) => {
    const p_tag = document.createElement("p");
    p_tag.innerHTML = data;
    p_tag.style.color = "green";
    completed_todos_div.appendChild(p_tag);
  });
});
pending.addEventListener("click", () => {
  pending_todos.forEach((data) => {
    const p_tag = document.createElement("p");
    p_tag.innerHTML = data;
    p_tag.style.color = "yellow";
    pending_todos_div.appendChild(p_tag);
  });
});
