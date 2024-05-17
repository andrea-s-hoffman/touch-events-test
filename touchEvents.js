let targetID;

document.addEventListener("touchstart", (e) => {
  console.log("touchstart");
  document.body.style.backgroundColor = "red";
  targetID = e.target.id;
});
document.addEventListener("touchmove", (e) => {
  console.log("touchmove");
  document.body.style.backgroundColor = "green";
  const div = document.getElementById(targetID);
  div.style.top = e.targetTouches[e.targetTouches.length - 1].clientY;
  div.style.left = e.targetTouches[e.targetTouches.length - 1].clientX;
});
document.addEventListener("touchend", (e) => {
  console.log("touchend");
  document.body.style.backgroundColor = "blue";
});
