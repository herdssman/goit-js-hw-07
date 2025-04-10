const input = document.getElementById('name-input')

const span = document.getElementById('name-output')

input.addEventListener('input', () => {
    const inputName = input.value.trim();
    span.textContent = inputName === '' ? 'Anonymous' : inputName;
})