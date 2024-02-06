function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.getElementsByTagName('input');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');



let amount = inputEl.map(element => {
    console.log(element)
})

function createBoxes(amount) {

}