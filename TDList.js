var button = document.getElementById("submit");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListafterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListafterkeydown(event) {
  if (inputLength() > 0 && event.key === "Enter") {
  createListElement();
  }
}

button.addEventListener("click", addListafterClick)

input.addEventListener("keydown", addListafterkeydown)
