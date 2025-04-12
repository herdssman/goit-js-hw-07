const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const empty = [...form.elements].some(
    input => input.type !== 'submit' && input.value.trim() === ''
  );

  if (empty) {
    alert('All form fields must be filled in');
    return;
  }

  const data = [...form.elements].reduce((acc, input) => {
    if (input.type !== 'submit') {
      acc[input.name] = input.value.trim();
    }
    return acc;
  }, {});

  console.log(data);
  form.reset();
});
