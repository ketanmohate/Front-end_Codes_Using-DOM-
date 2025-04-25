function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;
  
    const li = document.createElement("li");
  
    const check = document.createElement("span");
    check.innerHTML = "✔️";
    check.style.cursor = "pointer";
  
    const taskName = document.createElement("span");
    taskName.setAttribute("class", "task-name");
    taskName.textContent = taskText;
  
    check.onclick = function () {
      let currentClass = taskName.getAttribute("class");
      if (currentClass.indexOf("completed") === -1) 
    {
        taskName.setAttribute("class", currentClass + " completed");
      } 
      else 
      {
        // remove the 'completed' part manually
        let updated = currentClass.replace("completed", "").trim();
        taskName.setAttribute("class", updated);
      }
    };
  
    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "remove");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function () {
      li.remove();
    };
  
    li.appendChild(check);
    li.appendChild(taskName);
    li.appendChild(removeBtn);
  
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  