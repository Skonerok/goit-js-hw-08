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

const formRef= document.querySelector('.feedback-form');
const emailRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

formRef.addEventListener('input', throttle(onFeedbackForm, 500));
formRef.addEventListener('submit', onFormSubmit);

populateTextarea();

function onFeedbackForm(evt) { 
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(evt) {
    evt.preventDefault();
    formRef[{ emailRef, messageRef }] = evt.target.elements;
    if (emailRef.value == "" || messageRef.value == "") {
        return alert('Усі поля форми мають бути заповнені!');
    }

    console.log({ email: emailRef.value, message: messageRef.value });
    
    evt.target.reset();

    localStorage.removeItem(STORAGE_KEY);
 };

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        const parsedForm = JSON.parse(savedMessage);
        emailRef.value = parsedForm.emailRef;
        messageRef.value = parsedForm.messageRef;
    };
 };