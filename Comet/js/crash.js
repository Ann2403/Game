//функция столкновения астероида с кораблем
function crashAsteroid(getAsteroid, element) {
    
    //если положение астероида заходит на корабль
    if (getAsteroid.offsetTop + 30 > element.offsetTop && 
        getAsteroid.offsetLeft + 30 > element.offsetLeft && 
        getAsteroid.offsetLeft < element.offsetLeft + element.offsetWidth) {
            console.log(shots.length);
        //удаляем астероид
        getAsteroid.remove();
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
        } else if (element.className == "shot") {
            console.log("shot.delete");
            element.remove();
            shots.shift();
            console.log(shots.length);
        }
    }
}