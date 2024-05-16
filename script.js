let dragged;

// selectors
const div = document.getElementById("draggable");

document.body.addEventListener("dragstart", (e) => {
  e.dataTransfer.effectAllowed = "move";
});

document.body.addEventListener("dragenter", (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "none";
});

document.body.addEventListener("dragover", (event) => {
  // prevent default to allow drop
  event.preventDefault();
});

document.body.addEventListener("drop", (event) => {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  //   console.log("drop");
  div.style.top = event.pageY + "px";
  div.style.left = event.pageX + "px";
});
