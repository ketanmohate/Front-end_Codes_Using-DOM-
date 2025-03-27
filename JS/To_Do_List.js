let list_container = document.querySelector(".listcontainer");
let inputBox = document.querySelector("#inputBox");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");

btn.addEventListener("click", () => {
    let val = inputBox.value.trim(); 
    if (val !== "") 
    { 
        items(val);
        inputBox.value = "";
    }
});

let revbtn = document.createElement("button");

function items(val) {
    let li = document.createElement("li");
    // li.classList.add("list_text");

    let span = document.createElement("span");
    span.textContent = val;
    span.addEventListener("click", function() {
        toggleComplete(this);
    });

    let button = document.createElement("button");
    button.classList.add("remove_btn")
    button.textContent = "X";
    button.classList.add("delete");
    button.addEventListener("click", function() {
        removeTask(this);
    });

    li.appendChild(span);
    li.appendChild(button);

    list.prepend(li);
    // list.appendChild(li);

    let hr = document.createElement('hr');
    hr.classList.add("hr");
    li.appendChild(hr);
}

// Save to Local Storage
function saveToLocalStorage(val) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.unshift(val); // Add new item at the top
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load items from Local Storage
function loadItems() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(items); // Add each saved item to the list
}

// Remove from UI and Local Storage
function removeTask(button, val) {
    button.parentElement.remove();

    // Remove from Local Storage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== val);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(button) {
    button.parentElement.remove();
}

function toggleComplete(span) {
    span.classList.toggle("completed");
}
