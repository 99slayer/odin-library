const cardGrid = document.querySelector('.cardGrid');
const overlay = document.querySelector('.overlay');

let title = document.getElementById('title');
let author = document.getElementById('author');
let pageCount = document.getElementById('pageCount');
let hasRead = document.getElementById('hasRead');

const library = [];
let tempBook;

// book constructor
function Book(title,author,pageCount,hasRead){
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.hasRead = hasRead
};

function addBookToLibrary(){
    const book = new Book(title.value,author.value,pageCount.value,hasRead.value);
    library.push(book);
    overlay.style.visibility='hidden';
    clearGrid();
    library.forEach(populateGrid);
};

// loops through library array and displays each book on the page.
function populateGrid(x){
    const card = document.createElement('div');
    card.classList.add('card');

    const cardHeading = document.createElement('h3');
    const title = document.createElement('h4');
    const author = document.createElement('h4');
    const pageCount = document.createElement('h4');
    const hasRead = document.createElement('h4');

    cardHeading.textContent = `${x.title}`;
    title.textContent = `TITLE: ${x.title}`;
    author.textContent = `AUTHOR: ${x.author}`;
    pageCount.textContent = `PAGE COUNT: ${x.pageCount}`;
    hasRead.textContent = `HAVE YOU READ THIS BOOK?: ${x.hasRead}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'REMOVE BOOK';

    cardGrid.appendChild(card);
    card.appendChild(cardHeading);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pageCount);
    card.appendChild(hasRead);
    card.appendChild(removeButton);
};

// clears grid to prevent book duplicates
function clearGrid(){
    cardGrid.replaceChildren();
};

function formPopUp(){
    overlay.style.visibility='visible';
};

function removeBook(){

};

function changeHasRead(){

};