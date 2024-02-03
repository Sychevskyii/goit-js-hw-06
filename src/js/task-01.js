const itemEL = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemEL.length}`);

itemEL.forEach((item) => {
  const categoryEl = item.children[0].textContent;
  const numberOfEl = item.children[1].children.length;
  console.log(`Category: ${categoryEl}`);
  console.log(`Elements: ${numberOfEl}`);
});
