const titles = document.querySelectorAll('h2');
titles.forEach(title => {
  title.style.paddingLeft = '16px';
  title.style.paddingBottom = '16px';
  title.style.margin = '0';
});

const lists = document.querySelectorAll('.item ul');
lists.forEach(list => {
  list.style.display = 'flex';
  list.style.flexDirection = 'column';
  list.style.gap = '8px';
});

const items = document.querySelectorAll('.item ul li');
items.forEach(item => {
  item.style.border = '1px solid #808080';
  item.style.borderRadius = '4px';
  item.style.padding = '8px 16px';
  item.style.listStyleType = 'none';
  item.style.width = '360px';
});

const categoriesList = document.getElementById('categories');

categoriesList.style.display = 'flex';
categoriesList.style.flexDirection = 'column';
categoriesList.style.gap = '24px';


const categoryItems = categoriesList.querySelectorAll('.item');

categoryItems.forEach(item => {
  item.style.padding = '16px';
  item.style.backgroundColor = '#f6f6fe';
  item.style.borderRadius = '5px';
  item.style.display = 'flex';
  item.style.flexDirection = 'column';
  item.style.width = '460px';
})

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
