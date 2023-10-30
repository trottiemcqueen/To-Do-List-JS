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

button.addEventListener("click", function() {
  if (inputLength() > 0) {
    createListElement();
  }
})

input.addEventListener("keydown", function(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
})