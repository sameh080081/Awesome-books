
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
    const bookName = form.querySelector('.title').value;
    const bookTitle = form.querySelector('.author').value;
    //creating elements
    const li = document.createElement('li');
    const author = document.createElement('span');
    const title = document.createElement('span')
    const btn = document.createElement('button')
    btn.classList.add('remove');
    //appending
    li.appendChild(author);
    li.appendChild(title);
    li.appendChild(btn);
    bookList.appendChild(li)
    //Content display
    btn.textContent = 'Remove';
    author.textContent = bookName;
    title.textContent = bookTitle;

});
