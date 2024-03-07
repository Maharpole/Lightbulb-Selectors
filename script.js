const lightbulb1 = document.querySelector("#lightbulb1");
const lightbulb2 = document.querySelector("#lightbulb2");
const lightbulb3 = document.querySelector("#lightbulb3");
const subtitle = document.querySelector(".subtitle");
let count = 0;

lightbulb1.addEventListener("click", function() {
  count++;
  lightbulb1.classList.toggle("active");
  subtitle.innerHTML = `You've clicked the lights ${count} times`;
});

lightbulb2.addEventListener("click", function() {
  count++;
  lightbulb2.classList.toggle("active");
  subtitle.innerHTML = `You've clicked the lights ${count} times`;
});

lightbulb3.addEventListener("click", function() {
  count++;
  lightbulb3.classList.toggle("active");
  subtitle.innerHTML = `You've clicked the lights ${count} times`;
});
