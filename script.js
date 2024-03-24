const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function add() {
  if (inputbox.value === "") {
    alert("Please Enter Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    
    save();
    inputbox.value = "";
  }
}

listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      save();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      save();
    }
  },
  false
);

function save() {
  // Send the entire list content to the server for logging
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "log.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("action=update&listContent=" + encodeURIComponent(listcontainer.innerHTML));
}
function save() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();