const title = document.querySelector('h1')


const input = document.getElementById('name-input')

input.style.border = '1px solid #808080';
input.style.borderRadius = '4px';
input.style.width = '360px';
input.style.padding = '8px 16px';

const span = document.getElementById('name-output')

input.addEventListener('input', () => {
    const inputName = input.value.trim();
    span.textContent = inputName === '' ? 'Anonymous' : inputName;
})