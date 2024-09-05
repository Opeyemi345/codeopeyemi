let form = document.querySelector(".form"),
  taskInput = document.querySelector("#addTask-input"),
  taskUl = document.querySelector(".taskUl"),
  listSections = document.querySelector(".listSection"),
  deleteAllBtn = document.querySelector(".delete-All-Btn"),
  messageblock = document.querySelector(".message"),
  searchbar = document.querySelector("#search-input"),
  searchIcon = document.querySelector(".search-icon");

function loadAllEvents() {
  form.addEventListener("submit", runAddTaskEvent);
  deleteAllBtn.addEventListener("click", runDeleteAllEvent);
  taskUl.addEventListener("click", runDeleteIndividualTask);
  searchbar.addEventListener("input", runSearch);
  document.addEventListener("DOMContentLoaded" , runDocumentloadedEvent);
}

function runDocumentloadedEvent(){
  let item;
  if (localStorage.getItem("listitem") === null
  );
}
const runAddTaskEvent = (e) => {
  e.preventDefault();

  let value = taskInput.value;
  let li = document.createElement("li");
  li.className = "listItem";
  li.textContent = value;
  let xmark = document.createElement("p");
  xmark.textContent = "X";
  li.appendChild(xmark);

  if (taskInput.value === "") {
    // alert("Please select a task");
    handleMessage("Please select a task", "red");
    handleClearMessage();
  } else {
    taskUl.appendChild(li);
    handleMessage("task added successfully", "green");
    handleClearMessage();
    // console.log(taskUl.children.length);
    if (taskUl.children.length >= 4) {
      deleteAllBtn.style.display = "block";
    } else {
      deleteAllBtn.style.display = "hidden ";
    }
  }

  taskInput.value = "";
};
// delet all task function
function runDeleteAllEvent() {
  while (taskUl.firstElementChild) {
    taskUl.removeChild(taskUl.firstElementChild);
    deleteAllBtn.style.display = "none";
  }
}
// delete individual task function
function runDeleteIndividualTask(e) {
  if (e.target.parentElement.className === "listItem") {
    if (confirm("Are you sure you want to delete")) {
      e.target.parentElement.remove();
    }
  }
}
function handleMessage(message, color) {
  messageblock.textContent = message;
  messageblock.style.background = color;
  messageblock.style.visibility = "visible";
}

function handleClearMessage() {
  setTimeout(function () {
    messageblock.style.visibility = "hidden";
  }, 2000);
}

function checkDeleteAllVisibility() {
  if (taskUl.innerHTML === "") {
    deleteAllBtn.style.display = "none";
  } else {
    deleteAllBtn.style.display = "block";
  }
}
function displaySearchBar() {
  if (searchbar.style.display === "none") {
    searchbar.style.display = "block";
  } else {
    searchIcon.style.display = "none";
  }
}

function runSearch(e) {
  let value = e.target.value.toLowerCase();
  let listItems = document.querySelectorAll(".listItem");

  let newList = Array.from(listItems);
  newList.forEach((item) => {
    let listValue = item.firstChild.textContent.toLowerCase();
    // console.log(listValue);
    if (listValue.indexOf(value) !== -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

checkDeleteAllVisibility();
loadAllEvents();

// window object

// console.log(window.innerWidth > 883);
// let message = "hello you are welcome to my site";
// alert(message);
// let test = confirm("Are you sure you want to do whatever you want?");
// console.log(test);

// let a = prompt("input value to get the square root");
// let b = Math.sqrt(a);
// let test = window.prompt("what is your name");
// window.location.href = "http://facebook.com";
// console.log(b);

let username = "james";

let value = username.indexOf("q");
console.log(value);
