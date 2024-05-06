const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${this.read ? 'read' : 'not read yet'}`;
  }
}

function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBooks() {
  let container = document.querySelector('.container');
  container.innerHTML = '';
  //myLibrary.forEach(book => p.innerHTML += "<br>" + Object.values(book).join(" "));
  //myLibrary.forEach(book => p.innerHTML += "<br>" + book.info());
  //document.body.appendChild(p);

  // myLibrary.forEach(book => container.innerHTML += `<div class="card">
  // Title: ${book.title} <br>
  // Author: ${book.author} <br>
  // Total Pages: ${book.pages} <br>
  // Status: ${book.read ? 'read' : 'not read yet'} <br>
  // <button type="button" class="removeBookBtn">Remove</button>
  // </div>
  // `);

  for (let i = 0; i <= myLibrary.length - 1; i++) {
    container.innerHTML += `<div class="card">
    Title: ${myLibrary[i].title} <br>
    Author: ${myLibrary[i].author} <br>
    Total Pages: ${myLibrary[i].pages} <br>
    Status: ${myLibrary[i].read ? 'read' : 'not read yet'} <br>
    <button type="button" class="removeBookBtn" data-book-index="${i}" >Remove</button>
    <button type="button" class="changeStatusBtn" data-book-index="${i}" >Change Read Status</button>
    </div>
    `;
  }

  document.body.appendChild(container);

  const removeBtns = document.querySelectorAll('.removeBookBtn');

  removeBtns.forEach(btn => btn.addEventListener('click', () => {
    const index = btn.dataset.bookIndex;
    myLibrary.splice(index, 1);
    displayBooks(); // Update the display after removing the book
  }));

  const changeStatusBtns = document.querySelectorAll('.changeStatusBtn');

  changeStatusBtns.forEach(btn => btn.addEventListener('click', () => {
    const index = Number(btn.dataset.bookIndex);
    myLibrary[index].read = !(myLibrary[index].read);
    displayBooks();
  }));
}



// functions to fill a random number of books 
function createBooks(numBooks) {
  const bookExamples = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
    { title: "1984", author: "George Orwell", pages: 328 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 218 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 234 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310 },
    { title: "Pride and Prejudice", author: "Jane Austen", pages: 279 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pages: 1178 },
    { title: "Moby-Dick", author: "Herman Melville", pages: 720 },
    { title: "Brave New World", author: "Aldous Huxley", pages: 288 },
    { title: "The Grapes of Wrath", author: "John Steinbeck", pages: 464 }
  ];

  for (let i = 0; i < numBooks; i++) {
    const randomBook = bookExamples[Math.floor(Math.random() * bookExamples.length)];
    addBookToLibrary(randomBook.title, randomBook.author, randomBook.pages, Math.random() < 0.5);
  }
}

// Example usage: create 5 books
//createBooks(5);

const dialog = document.getElementById("myDialog");

function showDialog() {
  dialog.show();
}

function closeDialog() {
  dialog.close();
}

const newBookBtn = document.querySelector('#addBook');
newBookBtn.addEventListener('click', () => {
  let title = document.querySelector('#bookTitle').value;
  let author = document.querySelector('#bookAuthor').value;
  let pages = document.querySelector('#bookPages').value;
  let read = (document.querySelector('input[name="bookRead"]:checked').value === 'true');

  addBookToLibrary(title, author, pages, read);
  displayBooks();
  closeDialog();
  ;
});

