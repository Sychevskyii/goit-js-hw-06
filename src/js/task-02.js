const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



ingredients.forEach(ingredient => {
  const itemEl = document.createElement(`li`);
  itemEl.textContent = ingredient;
  itemEl.classList = 'item';
  console.log(itemEl);
});

