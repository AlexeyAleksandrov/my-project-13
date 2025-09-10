// получаем форму по ID
const form = document.getElementById('ContactForm')

// получаем поля ввода по ID
const nameInput = document.getElementById('name')
const phoneInput = document.getElementById('phone')
const emailInput = document.getElementById('email')
// ... курс, сообщение и т.п.

// добавляем обработку события ввода email
emailInput.addEventListener('input', validateEmail)

// функция обработки ввода email
function validateEmail() {
    const emailRegex = /[A-Za-z0-9\._]{3,10}@[a-z0-9]{2,20}\.[a-z]{2,3}/;
    if(emailRegex.test(emailInput.value))
    {
        hideError(emailInput);
        return true;
    }
    else
    {
        showError(emailInput, "email должнен состоять из 3-10 символов, содержать знак @, а также быть в домене .ru или .com");
        return false;
    }
}

// функция показа ошибки и сообщения
function showError(input, message) {
    const formControl = input.parentElement;    // берем компонент, для которого показываем ошибку
    const errorElement = formControl.querySelector('.error') || document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;
    formControl.appendChild(errorElement);
    input.style.borderColor = 'red';  
}

// функция скрытия ошибки
function hideError(input) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error');
    if(errorElement)
    {
        formControl.removeChild(errorElement);
    }
    input.style.borderColor = 'purple'
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); // предотвращает отправку формы средствами HTML

    const isEmailValid = validateEmail();

    if(isEmailValid)
    {
        form.submit();  // вручную вызываем отправку формы
    }
})