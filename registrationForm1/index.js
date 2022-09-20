let errors = [];
function checkValidity(input) {
    const validity = input.validity;
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    document.getElementById('password').innerHTML = "";
    
    if (validity.valueMissing) { errors.push('Поле ' + input.placeholder + ' не заполнено');}
    if (validity.patternMismatch) {errors.push('Неверный формат заполнения поля ' + input.placeholder); }
    if (validity.rangeOverflow) { errors.push('Максимальное значение не может быть больше, чем 90'); }
    if (validity.rangeUnderflow) {errors.push('Минимальное значение не может быть меньше, чем 18'); }
    //!!!ВОТ ТУТ ВОПРОС!!!по проверкам ниже не поняла, как сделать, чтобы сообщение выводилось только 1 раз, а не для каждого инпута
    if (password.value.length <= 7) {
        errors.push('Ваш пароль слишком короткий, задайте пароль не менее 8-ми символов');
    }
    if (password.value !== confirmPassword.value) {
        errors.push('Введенные пароли не совпадают')
    }
    }


function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        checkValidity(input);
    }

    document.getElementById('errorMessages').innerHTML = errors.join('; <br>');

}



function colorMeName() {
    document.getElementById('firstName').style.backgroundColor = '#DCDCDC';
}

function colorMeBackName() {
    document.getElementById('firstName').style.backgroundColor = 'white';
}

function colorMeSurname() {
    document.getElementById('lastName').style.backgroundColor = '#DCDCDC';
}

function colorMeBackSurname() {
    document.getElementById('lastName').style.backgroundColor = 'white';
}

function changeBackground() {
    if(document.getElementById('chooseColor').value == "green")
    document.getElementById('bgColor').style.backgroundColor = '#CCFFCC';

    else if(document.getElementById('chooseColor').value == "blue")
    document.getElementById('bgColor').style.backgroundColor = '#AFEEEE';

    else if(document.getElementById('chooseColor').value == "pink")
    document.getElementById('bgColor').style.backgroundColor = '#FFC0CB';

else {
    document.getElementById('bgColor').style.backgroundColor = 'white';
}
}


