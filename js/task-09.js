function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", () => {
  let randomColor = getRandomHexColor();
  bodyEl.setAttribute("style", `background-color:${randomColor}`);
  spanEl.textContent = randomColor;
});
