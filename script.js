function Book(title, author, pages, read, unread) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.unread = unread;

  this.info = function () {
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
  };
}

const theHobbit = new Book("The hobbit", "Rowan", 256);

console.log(theHobbit.info());
