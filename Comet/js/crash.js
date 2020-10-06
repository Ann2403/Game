//функция столкновения астероида с кораблем
function crashAsteroid(getAsteroid, element) {
    
    //если положение астероида заходит на переданный элемент
    if (getAsteroid.offsetTop + getAsteroid.offsetWidth > element.offsetTop && 
        getAsteroid.offsetLeft + getAsteroid.offsetWidth > element.offsetLeft && 
        getAsteroid.offsetLeft < element.offsetLeft + element.offsetWidth) {
        //вызываем функцию взрыва
        explode(getAsteroid, "explode", 9);
        //если элемент - корабль
        if(element == ship) {
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
            //если элемент - пуля
        } else if (element.className == "shot") {
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

//функция взрыва
function explode(element, nameFolder, maxImg) {
    //присваиваем элементу id
    element.id = 'explode';
    //перменная отображающая номер картинки
    let i = 1;
    //каждые 100 милисекунд
    let newImg = setInterval(() => {
        console.log("url(css/img/" + nameFolder + "/" + i + ".png)");
        //присваиваем элементу новую картинку
        element.style.background = "url(css/img/" + nameFolder + "/" + i + ".png)";
        //переходим к следующей картинке
        i++;
        //если картинок 9
        if(i == maxImg) {
            //останавливаем итервал
            clearInterval(newImg);
            //удаляем элемент
            element.remove();
        }
    }, 100);
}