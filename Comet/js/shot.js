//функция создание пули
function creatureShot() {
    //создаем элемент div
    shot = document.createElement('div');
    //задаем ему класс
    shot.className = 'shot';
    //задаем ему id
    shot.id = ++numbetShot;
    //задаем исхдоное положение
    shot.style.left = ship.offsetLeft + 23 + 'px';
    //добавляем ее на поле
    full.appendChild(shot);
    setTimeout(() => {
        shot.style.height = '36px';
        shot.style.background = "url(css/img/shot-min.png)";
    }, 500);
    //и в массив для хранение выстрелов
    shots.push(shot);
    //вызываем функция движения пули
    moveShot(shot);
}

//функция движения пули
function moveShot(getShot) {
    //каждые 10 милисекунд 
    let shotsMove = setInterval(() => {
        //увеличиваем отступ пули снизу на 1 px
        getShot.style.top = getShot.offsetTop - 1 + "px";
        //если отступ менее 20 рх и не равен 0
        if (getShot.offsetTop < 20 && getShot.offsetTop != 0) {
            //удаляем пулю
            getShot.remove();
            //перебираем массив с пулями
            shots.forEach(function(element, i) {
                //если id пули с массива = id переданной в функцию пули
                if (element.id == getShot.id) {
                    //удаляем с массива 1 ячейку начиная с позиции i
                    shots.splice(i, 1);
                }
            });
            //останавливаем интервал движения пули
            clearInterval(shotsMove);
        }
    }, 5);
}