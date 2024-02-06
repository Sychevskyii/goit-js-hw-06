function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.getElementsByTagName('input');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

// console.log()

// function createBoxes(amount) {
//     inputEl[0].addEventListener('change', () => {
//       let amount = parseInt(inputEl[0].value);
//       amount(amount);
//     });
// }

// // Приклад виклику createBoxes з функцією зворотного виклику
// createBoxes(function(amount) {
//   console.log("New amount:", amount);
// });


function createBoxes(callback) {
    inputEl[0].addEventListener('change', () => {
        const amount = parseInt(inputEl[0].value);
        callback(amount);
    });
}

// Приклад виклику createBoxes з функцією зворотного виклику
createBoxes(function(amount) {
    console.log("New amount:", amount);
});