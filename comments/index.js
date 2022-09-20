document.addEventListener('DOMContentLoaded', function (event) {
    let name = localStorage.getItem('name');
    let avatar = localStorage.getItem('avatar');
    if (name != null) {
        document.getElementById('author').value = name;
    }

    if (avatar != null) {
        document.getElementById('avatar').value = avatar;
    }

})

function sendMessage(author, avatar, comment) {
    document.getElementById('chat').innerHTML +=
        `<span class="author">${author}:</span><span>${avatar}</span><br><span class="comment">${comment}</span><br>`;
}

document.getElementById("avatar").onchange = function () {
    document.getElementById("img").src = document.getElementById("avatar").value;
}

function checkMessage() {
    let author = document.getElementById('author').value;
    let comment = document.getElementById('comment').value;
    let avatar = document.getElementById('avatar').value;

    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', author);
    }

    if (localStorage.getItem('avatar') == null) {
        localStorage.setItem('avatar', avatar);
    }

    //не нашла, как вывести аватар не ссылкой, а картинкой(((
    sendMessage(author, avatar, comment);
}