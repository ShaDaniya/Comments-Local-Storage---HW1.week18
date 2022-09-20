//  я не совсем поняла, что нужно сделать в этом задании, сделала, как поняла) составила список, он сохранется в local Storage  и выводится внизу на странице текстом

let notes = [];

        function finishNote(sender) {
            sender.parentElement.classList.toggle('done');
        }

        function addNote() {
            const newNote = document.getElementById('newNote').value;
            notes.push(newNote);
            generateNote();
            localStorage.setItem('note', JSON.stringify(notes));
            let outNotes = JSON.parse(localStorage.getItem('note'));
            //console.log(outNotes);
            document.getElementById('outNotes').innerHTML = outNotes;
        }


        function generateNote() {
            let optionString = '';
            for (let note of notes) {
                optionString +=
                    `<div><input type='checkbox' onchange='finishNote(this)'><span>${note}</span><button>Удалить</button></div>`;
            }

            document.getElementById('container').innerHTML = optionString;
        }

        const btn = document.getElementById('addNote');

        btn.addEventListener('click', function handleClick(event) {
            event.preventDefault();

            const inputs = document.querySelectorAll('input');

            inputs.forEach(input => {
                input.value = '';
            });
        });

        document.addEventListener("DOMContentLoaded", function (event) {
            let myNote = localStorage.getItem('myNote');
            if (myNote != null) {
                document.getElementById('newNote').value = myNote;
            };
            console.log(myNote);

            generateNote();

        });