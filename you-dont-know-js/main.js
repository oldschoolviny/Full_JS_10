'use strict';

let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book');

console.log(books);
console.log(book);

// Растановка книг
books[0].insertBefore(book[1], book[0]);
books[0].insertBefore(book[0], book[2]);
books[0].insertBefore(book[4], book[2]);
books[0].insertBefore(book[3], book[2]);
books[0].insertBefore(book[5], book[2]);

// Заголовок в книге 3
let bookTitle = document.querySelectorAll('a');
bookTitle[2].textContent = "Книга 3. this и Прототипы Объектов";

// Востановление порядка 2 u 5 books
let list = document.querySelectorAll('ul'),
    chapterTwo = list[1],
    chapterFife = list[4],
    listChapterTwo = chapterTwo.children,
    listChapterFife = chapterFife.children;

chapterTwo.insertBefore(listChapterTwo[2], listChapterTwo[10]);
chapterTwo.insertBefore(listChapterTwo[7], listChapterTwo[3]);
chapterTwo.insertBefore(listChapterTwo[6], listChapterTwo[3]);

chapterFife.insertBefore(listChapterFife[9], listChapterFife[3]);
chapterFife.insertBefore(listChapterFife[2], listChapterFife[7]);
chapterFife.insertBefore(listChapterFife[5], listChapterFife[9]);

// Добавление главы в 6 книге
let bookSix = list[5],           
    newItem = document.createElement('li'),
    listNewItem = bookSix.children;

bookSix.appendChild(newItem);
newItem.textContent = "Глава 8: За пределами ES6";
bookSix.insertBefore(listNewItem[10], listNewItem[9]);

// console.log(list);
// console.log(bookSix);
// console.log(newItem);
// console.log(listNewItem);

// Изменение фонa
let image = document.getElementsByTagName('body');
image[0].setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');


//Удаление рекламы
let adv = document.querySelector('.adv');
adv.classList.remove('adv');
// console.log(adv);