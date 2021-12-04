var task_count = 1;

function AddTask() {
  var task = document.getElementById("taskin");
  var taskdiv = document.getElementById("todoDiv");
  var taskp = document.createElement("p");
  var text = document.createTextNode(task.value);
  task_count++;

  //setting up each item
  var idname = task_count;
  taskp.appendChild(text);
  taskdiv.appendChild(taskp);
  taskp.setAttribute("id", "idname");
  taskp.setAttribute("onClick", "RemoveTask(this.id)");

  //console and count
  console.log(task.value);
  console.log(task_count);
}

function RemoveTask(ele) {
  var toremove = document.getElementById(ele);
  toremove.remove();
}
