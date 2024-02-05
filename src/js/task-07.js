const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
const defaultValue = parseInt(inputEl.value);
textEl.setAttribute("style", `font-size:${defaultValue}px`);

inputEl.addEventListener("input", () => {
  let inputElvalue = parseInt(inputEl.value);

  textEl.setAttribute("style", `font-size:${inputElvalue}px`);
});
