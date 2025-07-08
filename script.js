const myLibrary = [];

function Book(title, author, pages, read, unread, id) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read),
    (this.unread = unread),
    (this.id = id),
    (this.info = function () {
      return (
        "Book name: " +
        this.title +
        " " +
        "Author: " +
        this.author +
        " " +
        "Pages: " +
        this.pages
      );
    });
}

const theHobbit = new Book("The hobbit", "Rowan", 256);

console.log(theHobbit);

function addBookToLibrary(title, author, pages, read, unread, id) {
  let randomId = self.crypto.randomUUID();
}
