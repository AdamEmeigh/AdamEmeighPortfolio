let nameLang = document.getElementById("name");

function nameChange() {
    nameLang.innerHTML = 'アダム・エメイ';
    nameLang.style.fontSize = '76px';
};

function nameReturn() {
    nameLang.innerHTML = 'Adam Emeigh';
    nameLang.style.fontSize = '100px';
}

nameLang.addEventListener('mouseover', nameChange);
nameLang.addEventListener('mouseout', nameReturn);