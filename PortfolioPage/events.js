let nameLang = document.getElementById('name');

function nameChange() {
    nameLang.style.color = 'red';
};

nameLang.addEventListener('mousedown', nameChange);