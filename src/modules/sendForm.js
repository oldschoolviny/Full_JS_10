const form = document.getElementById('form1'),
    formQuest = document.getElementById('form2'),
    formPopup = document.getElementById('form3'),
    bodyFormEvent = document.body;
    
    bodyFormEvent.addEventListener('input', (event) => {
        let target = event.target;
        if (target.classList.contains('form-phone')) {
            target.value = target.value.replace(/[^0-9\\+]/, '');
        }
    if (target === document.getElementById('form2-name') || target.classList.contains('mess') ||
    target.classList.contains('form-name')) {
        target.value = target.value.replace(/[^А-яа-я\s]/, '');
}
});

const sendForm = (ourForm) => {
const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

const statusMessage = document.createElement('div');
statusMessage.style.cssText = 'font-size: 2rem';

ourForm.addEventListener('submit', (event) => {
  event.preventDefault();
  ourForm.appendChild(statusMessage);
  const formData = new FormData(ourForm);
  let body = {};
  formData.forEach((val, key) => {
    body[key] = val;
  });
  statusMessage.textContent = loadMessage;

  postData(body)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Status network not 200');
      }
      statusMessage.textContent = successMessage;
    })
    .catch((error) => {
      statusMessage.textContent = errorMessage;
      console.error(error);
    })
    .then((response) => {
      ourForm.reset();
    });
});
const postData = (body) => {
  return fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
};
};

export default sendForm;

export {form, formQuest, formPopup};