const menu = document.getElementById('menu-');
const button= document.getElementById('menu-icon');
const closebtn = document.getElementById ('closed');
const menuitems= document.getElementById ('mlist');

button.onclick = function display() {
    menu.style.display = 'block';
}

closebtn.onclick = function close() {
    menu.style.display = 'none';
}

menuitems.onclick = function close() {
    menu.style.display = 'none';
}

