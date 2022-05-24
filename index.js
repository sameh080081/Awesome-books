let data = JSON.parse(localStorage.getItem('data'));
const books = document.getElementById('lists');

function removeBook(title, author, element) {
  element.remove();
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].title === title && data[i].author === author) {
      data.splice(i, 1);
    }
  }
  localStorage.setItem('data', JSON.stringify(data));
}

function displayBook(title, author) {
  const bookColumn = document.createElement('div');
  {
    const bookTitle = document.createElement('h3');
    bookTitle.innerText = title;
    bookColumn.appendChild(bookTitle);

    const bookAuthor = document.createElement('h3');
    bookAuthor.innerText = author;
    bookColumn.appendChild(bookAuthor);

    const removeBotton = document.createElement('button');
    removeBotton.type = 'button';
    removeBotton.innerText = 'Remove';
    removeBotton.addEventListener('click', () => {
      removeBook(title, author, bookColumn);
    });
    bookColumn.appendChild(removeBotton);

    const vector = document.createElement('hr');
    bookColumn.appendChild(vector);
  }
  books.appendChild(bookColumn);
}

function addBook(title, author) {
  data.push({ title, author });
  localStorage.setItem('data', JSON.stringify(data));
  displayBook(title, author);
}

if (data) {
  for (let i = 0; i < data.length; i += 1) {
    displayBook(data[i].title, data[i].author);
  }
} else {
  data = [];
}

const form = document.getElementById('myform');
const bookT = form.querySelector('.title');
const bookA = form.querySelector('.author');

form.addEventListener('submit', (e) => {
  addBook(bookT.value, bookA.value);
  bookT.value = '';
  bookA.value = '';
  e.preventDefault();
});
