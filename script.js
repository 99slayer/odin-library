const cardGrid = document.querySelector('.cardGrid');
const overlay = document.querySelector('.overlay');

//form input elements
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

Book.prototype.changeHasRead = function(){

}

function addBookToLibrary(){
    const book = new Book(title.value,author.value,pageCount.value,hasRead.checked);
    library.push(book);
    clearForm();
    overlay.style.visibility='hidden';
    clearGrid();
    library.forEach(populateGrid);
    console.log(library);
    //should clear input after book has been added
};

// loops through library array and displays each book on the page.
function populateGrid(x){
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-library-index',`${library.indexOf(x)}`);
    let cardIndex = card.getAttribute('data-library-index');

    const cardHeading = document.createElement('h3');
    const title = document.createElement('h4');
    const author = document.createElement('h4');
    const pageCount = document.createElement('h4');
    const hasRead = document.createElement('h4');

    const hasReadToggle = document.createElement('input')
    hasReadToggle.classList.add('hasReadToggle');
    hasReadToggle.setAttribute('type','checkbox');
    hasReadToggle.checked = x.hasRead;

    cardHeading.textContent = `${x.title}`;
    title.textContent = `TITLE: ${x.title}`;
    author.textContent = `AUTHOR: ${x.author}`;
    pageCount.textContent = `PAGE COUNT: ${x.pageCount}`;
    hasRead.textContent = `HAVE YOU READ THIS BOOK?: ${x.hasRead}`;

    const removeButton = document.createElement('button');
    removeButton.setAttribute('onclick',`removeBook(${cardIndex})`);
    removeButton.textContent = 'REMOVE BOOK';

    cardGrid.appendChild(card);
    card.appendChild(cardHeading);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pageCount);
    card.appendChild(hasRead);
    card.appendChild(hasReadToggle);
    card.appendChild(removeButton);
};

// clears grid to prevent book duplicates
function clearGrid(){
    cardGrid.replaceChildren();
};

function openForm(){
    clearForm();
    overlay.style.visibility='visible';
};

function closeForm(){
    clearForm();
    overlay.style.visibility='hidden';
};

function clearForm(){
    title.value = '';
    author.value = '';
    pageCount.value = '';
    hasRead.checked = false;
};

function removeBook(x){
    if(x>-1){
        library.splice(x,1);
    };
    clearGrid();
    library.forEach(populateGrid);
    console.log(library);
};