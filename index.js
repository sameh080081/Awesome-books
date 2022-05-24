const books = document.querySelector('.lists')

let data = JSON.parse(localStorage.getItem('data'));

function displayBook(title,author){
    const li = document.createElement('li');
    const author = document.createElement('span');
    const title = document.createElement('span');
    const btn = document.createElement('button');
    btn.classList.add('remove');
    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(btn);
    books.appendChild(li);
    btn.textContent = 'Remove';
    btn.addEventListener('click',()=>{removeBook(title,author,books)});
    author.textContent = bookAuthor;
    title.textContent = bookTitle;
}

function addBook(title,author){
    data.push({title, author,});
    localStorage.setItem('data', JSON.stringify(data));
    displayBook(title,author);
}

function removeBook(title,author,element){
    element.remove();
    data.filter(data.title!=title&&data.author!=author);
}

if(data) {
    for (let i=0 ;i<data.length;i+=1){
        displayBook(data[i].title,data[i].author);
    }
}
else{
    data=[];
}

const form = document.getElementById('myform');
const bookTitle = form.querySelector('.title');
const bookAuthor = form.querySelector('.author');
form.addEventListener('submit', (e) => {
    addBook(bookTitle.value,bookAuthor.value);
    bookTitle.value='';
    bookAuthor.value='';
    e.preventDefault();
});
