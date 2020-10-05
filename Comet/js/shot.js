//функция создание пули
function creatureShot() {
    //создаем элемент div
    shot = document.createElement('div');
    //даем ему класс
    shot.className = 'shot';
    //задаем исхдоное положение
    shot.style.left = ship.offsetLeft + 23 + 'px';
    //добавляем ее на поле
    full.appendChild(shot);
    //и в массив для хранение выстрелов
    shots.push(shot);
    //вызываем функция движения пули
    moveShot(shot);
    //
    console.log('shot' + shot.offsetTop);
}

function moveShot(getShot) {
    //каждые 10 милисекунд 
    let shotsMove = setInterval(() => {
        //увеличиваем отступ пули снизу на 1 px
        getShot.style.top = getShot.offsetTop - 1 + "px";
        //если отступ менее 20 рх
        if (getShot.offsetTop < 20 && getShot.offsetTop != 0) {
            shots.shift();
            //удаляем пулю
            getShot.remove();
            
            console.log('delete shot' + shots.length);
            clearInterval(shotsMove);
        }
    }, 10);
}

function fire() {
    creatureShot();
}