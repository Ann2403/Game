//функция создания корабля
function creatureShip() {
    //создаем элемент div
    ship = document.createElement("div");
    //присвамваем ему класс ship для задания свойств css
    ship.className = "ship";
    //добавляем на поле
    full.appendChild(ship);
}

//функция передвижения корабля
function moveRect(e) {
    //получаем свойства css для корабля
    let css = getComputedStyle(ship);
    //получаем координаты отступа слева
    let left = parseInt(css.left);

    //пока событие будет иметь keyCode указанный в цикле будут выполняться действия в нем
    switch(e.keyCode) {
        // если нажата клавиша влево
        case 37:  
            //если отступ слева больше 12 и менее 733
            if(left > 12 && left < 733) 
            //отнимаем от него 72 пиклеся
            ship.style.left = left - 20 + "px";
            //прерываем цикл
            break;
        // если нажата клавиша вправо
        case 39:  
            //если отступ слева больше 11 и менее 732
            if(left > 11 && left < 732)
            //прибавляем к нему 72 пикселя
            ship.style.left = left + 20 + "px";
            //прерываем цикл
            break;
        // если нажата клавиша вверх
        case 38:  
            //вызываем функцию выстрела
            fire();
            //прерываем цикл
            break;
    }
}