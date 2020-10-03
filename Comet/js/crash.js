//функция столкновения астероида с кораблем
function crashAsteroid(getAsteroid) {
    //если положение астероида заходит на корабль
    if (getAsteroid.offsetTop + 30 > ship.offsetTop && 
        getAsteroid.offsetLeft + 30 > ship.offsetLeft && 
        getAsteroid.offsetLeft < ship.offsetLeft + 56) {
            
        //удаляем астероид
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
    }
}