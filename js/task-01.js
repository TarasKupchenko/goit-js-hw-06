const categoriesList = [...document.getElementById('categories').children];

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelector('ul').children;
  
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});