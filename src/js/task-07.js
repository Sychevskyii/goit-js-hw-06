const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');



inputEl.addEventListener('input', () => {
    let inputElvalue = parseInt(inputEl.value);
    
    textEl.setAttribute('style', `font-size:${inputElvalue}px`);
})