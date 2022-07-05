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
    library.forEach(displayBooks);
    //library.forEach()
};

// loops through library array and displays each book on the page.
function displayBooks(x){
    const card = document.createElement('div');
    const cardContent = document.createTextNode(`TITLE:${x.title} \bAUTHOR:${x.author} \bPAGE COUNT:${x.pageCount} \bHAVE YOU READ THIS BOOK?:${x.hasRead}`)
    const removeButton = document.createElement('button');
    cardGrid.appendChild(card);
    card.appendChild(cardContent);
    card.appendChild(removeButton);
};

function formPopUp(){
    overlay.style.visibility='visible';
};

function removeBook(){

};

function changeHasRead(){

};

// const dune = new Book('Dune','Frank Hurbert','700','yes');
// const starShipTroopers = new Book('Starship Troopers','Robert A. Heinlein','500','yes');
// library.push(dune)
// library.push(starShipTroopers)

// console.log(library[1])
// function log(){
//     console.log()
// }