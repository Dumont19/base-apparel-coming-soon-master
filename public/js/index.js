const form = document.querySelector('.form')
const email = document.getElementById('email')
const errorIcon = document.querySelector('.error-icon')
const errorMessage = document.querySelector('small')
const submitButton = document.querySelector('.btn')

form.addEventListener('submit', event => event.preventDefault())

function showError() {
    submitButton.addEventListener('click', () => {
        if (email.value === '' || email.value.includes('@') === false) {
            email.classList.add('error')
            submitButton.classList.add('error')
            errorMessage.style.visibility = 'visible'
            errorIcon.style.display = 'block'
        } else {
            email.classList.remove('error')
            submitButton.classList.remove('error')
            errorMessage.style.visibility = 'hidden'
            errorIcon.style.display = 'none'
            email.value = ''
            email.placeholder = 'Email Adress'
        }
    })
}
showError()