/* eslint max-classes-per-file: ["error", 3] */
class Storage {
  static getBook() {
    let books;
    if (JSON.parse(localStorage.getItem('books')) === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Storage.getBook();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title, author) {
    const books = Storage.getBook();
    books.forEach((book, index) => {
      if (book.title === title && book.author === author) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

class MyBooks {
  constructor(_title, _author) {
    this.title = _title;
    this.author = _author;
  }
}
class Interface {
  static displayBooks() {
    const books = Storage.getBook();
    books.forEach((book) => {
      Interface.updateBookList(book);
    });
  }

  static updateBookList(book) {
    const list = document.querySelector('#lists');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>by</td>
    <td>${book.author}</td>
    <button class= 'delete' >Remove</button>
    `;
    list.appendChild(row);
  }

  static removeBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static clearInputs() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }
}

document.addEventListener('DOMContentLoaded', Interface.displayBooks());
document.querySelector('#myform').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  const book = new MyBooks(title, author);
  Interface.updateBookList(book);
  Storage.addBook(book);
  Interface.clearInputs();
});

const remove = document.querySelector('#lists');
remove.addEventListener('click', (e) => {
  const title = e.target.previousElementSibling.previousElementSibling
    .previousElementSibling.innerText;
  const author = e.target.previousElementSibling.innerText;
  Storage.removeBook(title, author);
  Interface.removeBook(e.target);
});
