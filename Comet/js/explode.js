//функция взрыва
function explode(element, nameFolder, maxImg) {
    //присваиваем элементу id
    element.id = 'explode';
    //перменная отображающая номер картинки
    let i = 1;
    //каждые 100 милисекунд
    let newImg = setInterval(() => {
        //присваиваем элементу новую картинку
        element.style.background = "url(css/img/" + nameFolder + "/" + i + ".png)";
        //переходим к следующей картинке
        i++;
        //если картинок стало больше максимально переданного в функцию
        if(i > maxImg || status == 'over') {
            //останавливаем итервал
            clearInterval(newImg);
            //удаляем элемент
            element.remove();
        }
    }, 100);
    
}

//функция создания взрыва корабля
function creatureBum() {
    //создаем элемент div
    let bum = document.createElement('div');
    //задаем ему класс
    bum.className = 'bum';
    //добавляем ее на поле
    full.appendChild(bum);
    //задаем положение относительно корабля
    bum.style.left = ship.offsetLeft + 'px';
    //вызываем функцию взрыва
    explode(bum, 'explodeShip', 4);
}