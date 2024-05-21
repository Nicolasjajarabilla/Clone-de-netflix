let button = document.getElementById('submit');
let errors = document.getElementById('errors')

button.addEventListener('click', (e) => {
    e.preventDefault();
    let input = document.getElementById('email').value;
    if (input === "") {
        errors.style.display = "block";
    }
})


