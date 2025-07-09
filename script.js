const libraryContainer = document.querySelector("#library-container");
const addButton = document.querySelector("#add-btn");

const myLibrary = [];

function Book(title, author, pages, status, id) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.status = status),
    (this.id = id);
}

function addBookToLibrary(title, author, pages, status) {
  const id = self.crypto.randomUUID();

  const storedBooks = new Book(title, author, pages, status, id);

  myLibrary.push(storedBooks);
}
addBookToLibrary("The Hoot", "Nein", 135, "not reading");

addBookToLibrary("The Argo", "Heil", 135, "not reading");

console.log(myLibrary);

function displayBooks() {
  libraryContainer.innerHTML = "";

  myLibrary.forEach(function (book) {
    const card = document.createElement("div");
    card.setAttribute("class", "book-card");
    card.setAttribute("id", book.id);

    const title = document.createElement("h2");
    title.textContent = book.title;

    const author = document.createElement("h3");
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;

    const status = document.createElement("p");
    status.setAttribute("class", "card-status");
    status.textContent = `Status: ${book.status}`;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);

    libraryContainer.appendChild(card);
  });
}

displayBooks();
