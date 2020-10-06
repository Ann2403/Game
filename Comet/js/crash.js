//функция столкновения астероида с элементом переданным в функции
function crashAsteroid(getAsteroid, element) {
    
    //если положение астероида заходит на переданный элемент
    if (getAsteroid.offsetTop + getAsteroid.offsetWidth > element.offsetTop && 
        getAsteroid.offsetLeft + getAsteroid.offsetWidth > element.offsetLeft && 
        getAsteroid.offsetLeft < element.offsetLeft + element.offsetWidth) {

        //если элемент - корабль
        if(element.className == 'ship') {
            getAsteroid.remove();
            //отнимаем жизнь
            quantityLifes--;
            //если жизни закончились
            if (quantityLifes == 0) {
                //вызываем функция завершения игры
                over();
            }
            //обновляем блок с жизнями
            lifes.remove();
            creatureLifes();
            //вызываем функцию создания взрыва на корабле
            creatureBum();
            //если элемент - пуля
        } else if (element.className == "shot") {
            //вызываем функцию взрыва
            explode(getAsteroid, "explode", 8);
            //удаляем элемент
            element.remove();
            //перебираем массив с пулями
            shots.forEach(function(value, i) {
                //если id пули с массива = id элемента
                if (value.id == element.id) {
                    //удаляем с массива 1 ячейку начиная с позиции i
                    shots.splice(i, 1);
                }
            });
        }
    }
}