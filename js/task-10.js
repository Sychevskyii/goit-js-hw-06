function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesEl = document.querySelector("#boxes");
  boxesEl.innerHTML = "";

  let defaultSizeOfBox = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${defaultSizeOfBox}px`;
    box.style.height = `${defaultSizeOfBox}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesEl.appendChild(box);
    defaultSizeOfBox += 10;
  }
}

function destroyBoxes() {
  const boxesEl = document.querySelector("#boxes");
  boxesEl.innerHTML = "";
}

document.querySelector("button[data-create]").addEventListener("click", () => {
  let amount = parseInt(document.querySelector("input").value);
  createBoxes(amount);
});

document.querySelector("button[data-destroy]").addEventListener("click", () => {
  destroyBoxes();
});
