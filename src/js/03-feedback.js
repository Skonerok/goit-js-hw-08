// Напиши скрипт, який буде зберігати значення полів у локальне сховище,
// коли користувач щось друкує.
// 1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище 
// об'єкт з полями email і message, у яких зберігай поточні значення полів форми. 
// Нехай ключем для сховища буде рядок "feedback-form-state".
// 2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані,
// заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// 3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль 
// об'єкт з полями email, message та їхніми поточними значеннями.
// 4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. 
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {}; 

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', onEmailInput);
refs.message.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;

    console.log(formData);

    // + JSONstringify and JSONparse
});

completeForm();

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log('Send form');
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onTextareaInput(evt) {
    const message = evt.target.value;
    console.log(message);
    localStorage.setItem(STORAGE_KEY, message); 
};

function completeForm() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        console.log(savedMessage);
        refs.message.value = savedMessage;
    };
};

