const terminate = document.querySelectorAll('.remove');

Array.from(terminate).forEach((term) => {
    term.addEventListener('click', (e) => {

        const li = e.target.parentElement;
        li.parentNode.removeChild(li)
    })

});



const form = document.forms['myform'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const bookName = form.querySelectorAll('input[type="text"]').value;
})