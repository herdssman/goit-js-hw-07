function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector('.widget');
widget.style.display = 'flex';
widget.style.flexDirection = 'column';
widget.style.gap = '8px';
widget.style.alignItems = 'center';

const body = document.querySelector('body');

const btn = document.querySelector('.change-color');
btn.style.backgroundColor = '#4e75ff';
btn.style.padding = '8px 16px';
btn.style.width = '148px';
btn.style.height = '40px';
btn.style.borderRadius = '8px';
btn.style.border = 'none';
btn.style.color = '#fff';

btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = '#6c8cff';
});
btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = '#4e75ff';
});

const span = document.querySelector('.color');

btn.addEventListener('click', () => {
    const bodyColour = getRandomHexColor();
    document.body.style.backgroundColor = bodyColour;
    span.textContent = bodyColour;
})