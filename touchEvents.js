document.addEventListener("touchstart", (e) => {
  console.log("touchstart");
  document.body.style.backgroundColor = "red";
});
document.addEventListener("touchmove", (e) => {
  console.log("touchmove");
  document.body.style.backgroundColor = "green";
});
document.addEventListener("touchend", (e) => {
  console.log("touchend");
  document.body.style.backgroundColor = "blue";
});
