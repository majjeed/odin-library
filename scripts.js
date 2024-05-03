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
  let p = document.querySelector('p');
  //myLibrary.forEach(book => p.innerHTML += "<br>" + Object.values(book).join(" "));
  myLibrary.forEach(book => p.innerHTML += "<br>" + book.info());
  document.body.appendChild(p);
}