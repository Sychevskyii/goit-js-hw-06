const inputEl = document.getElementById("validation-input");
const requiredLength = parseInt(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length === requiredLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
