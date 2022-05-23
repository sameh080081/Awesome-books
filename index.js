
const terminate = document.querySelectorAll('.lists');
Array.from(terminate).forEach((term) => {
    term.addEventListener('click', (e) => {

        const li = e.target.parentElement;
        li.parentNode.removeChild(li)
    })

});


const bookList = document.querySelector('.lists')
const form = document.forms['myform'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const bookTitle = form.querySelector('.title').value;
    const bookAuthor = form.querySelector('.author').value;
    //Store data
    const data = JSON.stringify({bookTitle,bookAuthor});
    localStorage.setItem('data',data);
    //creating elements
    const li = document.createElement('li');
    const author = document.createElement('span');
    const title = document.createElement('span');
    const btn = document.createElement('button');
    btn.classList.add('remove');
    //appending
    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(btn);
    bookList.appendChild(li);
    //Content display
    btn.textContent = 'Remove';
    author.textContent = bookAuthor;
    title.textContent = bookTitle;
});

function populateStorage() {
    const formValues = JSON.parse(localStorage.getItem('data'));
    if (formValues) {
    const bookTitle = formValues.bookTitle;
    const bookAuthor = formValues.bookAuthor;

    const li = document.createElement('li');
    const author = document.createElement('span');
    const title = document.createElement('span');
    const btn = document.createElement('button');
    btn.classList.add('remove');
    //appending
    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(btn);
    bookList.appendChild(li);
    //Content display
    btn.textContent = 'Remove';
    author.textContent = bookAuthor;
    title.textContent = bookTitle;

    }
  }

  populateStorage();
