const title = document.querySelector('h2');
title.classList.add('title');

const list = document.querySelector('.item ul');
list.classList.add('list');

const items = document.querySelectorAll('.list li');
items.forEach(item => {
  item.classList.add('li-item');
});

const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
