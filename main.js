// Variables
let input = document.querySelector('input');
let add_button = document.querySelector('.add-button');
let ul = document.querySelector('ul');
let alert_box = document.querySelector('.alert-box');
let minus_button = ul.querySelectorAll('.minus');
let date_now = french_date();
let p_date = document.querySelector('.head-todolist').children[2];
let all_li = ul.children;

// Date d'aujourd'hui
p_date.textContent = date_now;

// Fonction pour aller chercher la date et la formater
function french_date() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date1 = new Date();
    const date_format = new Intl.DateTimeFormat('fr-FR', options).format(date1);
    const final_date = date_format.charAt(0).toUpperCase() + date_format.slice(1);
    return final_date;
}

// Fonction de suppression d'une tâche
function remove_task() {
    let minus_button = ul.querySelectorAll('.minus');
    for (let minus of minus_button) {
        minus.addEventListener('click', function(e) {
            minus.parentNode.remove();
        })
    }
    task_done();
}

// Fonction de l'ajout d'une tâche
function add_task() {
    task_done();
    // ON actualise le nombre de tâche actuels
    if (input.value == 0) {
        alert_box.style.display = 'block';
        setTimeout(() => alert_box.style.display = 'none', 3000);
    } else {
        // Sinon on ajoute le li au ul et le span au li
        let li = document.createElement('li');
        let span_minus = document.createElement('span');
        ul.appendChild(li).textContent = input.value;
        li.appendChild(span_minus).className = 'minus';
        remove_task();
    }
}
// Fonction de vérification de l'état du bouton +
function button_add_state_change() {
    // Si l'INPUT est vide Alors je désactive le BOUTON + (Grisé)
    if (input.value == 0) {
        add_button.style.backgroundColor = '#D8D8D8';
    }
    // J'écoute l'état de l'INPUT (si ça change)
    input.addEventListener('input', function(e) { 
    // INPUT désactivé
        if (input.value == 0) {
        add_button.style.backgroundColor = '#D8D8D8';
    // INPUT activé
        } else {
        add_button.style.backgroundColor = '#93DCAE'; 
        }
    })
}

// Fonction qui barre les tâches au click d'un li
function task_done() {
    for (let li of all_li) {
        li.addEventListener('click', function(e) {
            li.classList.toggle('task-done');
        })
    }
}

add_button.addEventListener('click', add_task);
input.addEventListener('keydown', function (e) {
    let key_pressed = e.key;
    if (key_pressed == 'Enter' && input.value !== 0) {
        add_task();
    }
});

button_add_state_change();
add_task();
remove_task();
task_done();