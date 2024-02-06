function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const elements = {
    input: document.getElementsByTagName('input'),
    createBtn: document.querySelector('button[data-create]'),
    destroyBtn: document.querySelector('button[data-destroy]'),
    boxes: document.querySelector('#boxes')
};

function createBoxes(amount) {
    let numOfBoxes = parseInt(elements.input[0].value);
    amount(numOfBoxes);

    elements.createBtn.addEventListener('click', () => {
        
    })
}

