//Функция для проверки заполнения поля First name
function check() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const emailAddress = document.getElementById('emailAddress');
    const phoneNumber = document.getElementById('phoneNumber');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    document.getElementById('errorMessageFirstName').innerHTML = "";
    document.getElementById('errorMessageLastName').innerHTML = "";
    document.getElementById('errorMessageEmail').innerHTML = "";
    document.getElementById('errorMessagePhoneNumber').innerHTML = "";
    document.getElementById('errorMessagePassword').innerHTML = "";
    document.getElementById('errorMessageConfirmPassword').innerHTML = "";
    document.getElementById('errorMessageShortPassword').innerHTML = "";
    document.getElementById('emptyGender').innerHTML = "";
    document.getElementById('errorDateOfBirth').innerHTML = "";


    document.getElementById('errorMessage').innerHTML = "";

    if (firstName.value == '') {
        document.getElementById('errorMessageFirstName').innerHTML+= "Пожалуйста, заполните имя<br>";

    }

    if (lastName.value == '') {
        document.getElementById('errorMessageLastName').innerHTML+= "Пожалуйста, заполните фамилию<br>";
}

if (emailAddress.value == '') {
    document.getElementById('errorMessageEmail').innerHTML+= "Пожалуйста, заполните электронный адрес<br>";
}

if (phoneNumber.value == '') {
    document.getElementById('errorMessagePhoneNumber').innerHTML+= "Пожалуйста, заполните номер телефона<br>";
}

if (password.value == '') {
    document.getElementById('errorMessagePassword').innerHTML+= "Пожалуйста, придумайте пароль<br>";
}

if (password.value.length <= 6) {
    document.getElementById('errorMessageShortPassword').innerHTML+= "Ваш пароль слишком короткий<br>";
}

if (confirmPassword.value == '') {
    document.getElementById('errorMessageConfirmPassword').innerHTML+= "Пожалуйста, повторите пароль<br>";
}

if (password.value !== confirmPassword.value) {
    document.getElementById('errorMessage').innerHTML+= "Ваши пароли не совпадают<br>";
}
}



function successForm() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const emailAddress = document.getElementById('emailAddress');
    const phoneNumber = document.getElementById('phoneNumber');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    if (firstName.value != '' && lastName.value != '' && emailAddress.value != '' && phoneNumber.value != '' && password.value != '' && confirmPassword.value != '') {
        alert('Вы успешно зарегистрировались!');
    }
}

function validMail() {

    const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const myMail = document.getElementById('emailAddress').value;
    const valid = re.test(myMail);
    document.getElementById('validEmail').innerHTML = "";

    if (valid) {
        document.getElementById('validEmail').innerHTML+= "Адрес эл. почты введен правильно!";
    }
    else { document.getElementById('validEmail').innerHTML+= "Адрес электронной почты введен неправильно!";
}
    return valid;
}

function validPhone() {
    const re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    const myPhone = document.getElementById('phoneNumber').value;
    const valid = re.test(myPhone);
    document.getElementById('validPhone').innerHTML = "";

    if (valid) {
        document.getElementById('validPhone').innerHTML+= "Номер телефона введен правильно!";
    }
    else {document.getElementById('validPhone').innerHTML+= "Номер телефона введен неправильно!";
}
    return valid;
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

//Проверка заполненности радио с полом у меня не работает правильно. Оставила то, что получилось()
function checkGender () {
    if (document.getElementsByName('gender').checked=true) {
        document.getElementById('emptyGender').innerHTML+= 'Пожалуйста, укажите ваш пол'
    }
    // else if (document.getElementsByName('gender').checked=false) {
    //     document.getElementById('filledGender').innerHTML+= 'Cпасибо, что указали пол!'
    // }
    else if ((document.getElementById('femaleGender').checked=true) || (document.getElementById('maleGender').checked=true) || (document.getElementById('otherGender').checked=true)) {
        document.getElementById('emptyGender').innerHTML+= 'Cпасибо, что указали пол!';
    }
    }


//функция проверки правильности даты рождения стырена со стаковерфлоу, ноооо ьам она не работала правильно, потому что в birthdayDate в условии не было указано правильно, вот так (birthdayDate.value == "" (не было value), я это нашла и поправила, но вот проверку на дату рождения введенную позже текущего года, я не знаю, как сделать
const birthdayDate = document.getElementById('birthdayDate');

function checkDateOfBirth () {
    var validation = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
    var date= new Date();
        if (birthdayDate.value == "" || birthdayDate.value == null||!validation.test(birthdayDate.value)) {
            document.getElementById('errorDateOfBirth').innerHTML+= 'Введите дату в формате yyyy-mm-dd'
            return false;
        }
        else if(birthdayDate.value > date.getFullYear()){
            alert("Invaid Date");
            return false;
        }
        else{
            document.getElementById('errorDateOfBirth').innerHTML+= 'Верно!';
        }

}


const button = document.getElementById('successRegistration');

button.addEventListener('click', check);
button.addEventListener('click', successForm);
button.addEventListener('click', checkGender);
button.addEventListener('click', checkDateOfBirth);
button.addEventListener('click', checkGender);


