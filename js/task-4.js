const form = document.querySelector('.login-form')


const button = form.querySelector('button');

button.style.backgroundColor = '#4e75ff';
button.style.padding = '8px 16px';
button.style.width = '86px';
button.style.height = '40px';
button.style.borderRadius = '8px';
button.style.border = 'none';
button.style.color = '#fff';
button.style.marginLeft = '8px';
button.style.marginTop = '16px';

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#6c8cff';
});
button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#4e75ff';
});

const labels = document.querySelectorAll('label')
labels.forEach(label => {
    label.style.display = 'flex';
    label.style.flexDirection = 'column';
    label.style.gap = '8px';
    label.style.fontSize = '16px';
    label.style.maxWidth = '240px';
    label.style.padding = '8px';
});

const inputs = document.querySelectorAll('label input')
inputs.forEach(input => {
    input.style.padding = '8px 16px';
    input.style.border = '1px solid #808080';
    input.style.borderRadius = '4px';
    input.style.outline = 'none';

input.addEventListener('mouseover', () => {
    input.style.border = '1px solid #000';
});
input.addEventListener('mouseout', () => {
    input.style.border = '1px solid #808080';
});
    
});





form.addEventListener('submit', (event) => {
    event.preventDefault();

    const empty = [...form.elements].some(input => input.type !== 'submit' && input.value.trim() === '');

    if (empty) {
        alert('All form fields must be filled in');
    } else {
        const data = [...form.elements].reduce((acc, input) => {
            if (input.type !== 'submit') {
                acc[input.name] = input.value.trim();
            }
            return acc;
        }, {});

        console.log(data);

        form.reset();
    }

});