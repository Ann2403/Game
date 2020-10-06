//функция создание астероида
function creatureAsteroid() {
    //создаем элемент div
    asteroid = document.createElement("div");
    //присвамваем ему класс asteroid для задания свойств css
    asteroid.className = "asteroid";
    //добавляем на поле
    full.appendChild(asteroid);
}

//функция определения количества астероидов
function asteroids() {
    //определяем рандомное число астероидов
    let quantityAsteroid = random(1, 3);
    //указываем текущее количество астероидов
    let currentQuantityAsteroid = 0;
    //пока текущее количество астероидов меньше заданого
    while (currentQuantityAsteroid < quantityAsteroid) {
        //вызываем функцию создания астероида
        creatureAsteroid();
        //заносим созданый астероид в массив
        allAsteroids[currentQuantityAsteroid] = asteroid;
        //определяем исходную позицию астероида
        positionAsteroid();
        //увеличиваем текущее их количество 
        currentQuantityAsteroid++;
    }
}

//функция определения положения астероида
function positionAsteroid() {
    //обьявляем переменные уникальности числа и позиции астероида
    let unic, positionAsteroid;
    //выполняем действия
    do {
        //определяем рандомное число в пределах размеров поля
        positionAsteroid = random(20, 720);
        //указываем что число уникально
        unic = true;
        //запускаеи перебор массива с астероидами
        for (a = 0; a < allAsteroids.length; a++) {
            //определяем позиции астероидов из массива
            let positionNowAsteroid = parseInt(allAsteroids[a].style.left);
            //если позиция нового астероида пересикается с уже существующими
            if(positionAsteroid < (positionNowAsteroid + asteroid.offsetWidth) && positionAsteroid > (positionNowAsteroid - 30)) {
                //задаем что такое число уже было
                unic = false;
                //и выходим с перебора массива
                break;
            }
        }
    //пока переменная unic не будет уникальной
    } while (!unic);
    //задаем исходное положение астероида относительно левого края
    asteroid.style.left = positionAsteroid + "px";
}

//функция падения астероида
function moveAsteroid(getAsteroid) {
    //каждые 10 милисекунд 
    let moveIntervalAsteroid = setInterval(() => {
        //увеличиваем отступ астероида сверху на 1 px
        getAsteroid.style.top = getAsteroid.offsetTop + 1 + "px";
        //вызываем функцию проверки на столкновение астероида с кораблем
        crashAsteroid(getAsteroid, ship); 
        //если вдлина массива с пулями больше 0
        if(shots.length > 0) {
            //перебираем все пули 
            shots.forEach(function(value) {
                //и вызываем функцию проверки на столкновение астероида с пулей
                crashAsteroid(getAsteroid, value);
            });
        }
        // если id астероида explode - вызвалась функция взрыва
        if (getAsteroid.id == 'explode' ) {
            //останавливаем движение астероида
            clearInterval(moveIntervalAsteroid);
        //если отступ превышает 720 рх
        } else if (getAsteroid.offsetTop > 720) {
            //останавливаем движение астероида
            clearInterval(moveIntervalAsteroid);
            //удаляем астероид
            getAsteroid.remove();
        }
    }, 10);
}

//функция запуска движения всех астероидов
function getAsteroids() {
    //пербираем массив с астероидами
    allAsteroids.forEach(function(element, i) {
        //вызываем функция падения астероида
        moveAsteroid(element);
        //удаляем с массива астероид
        delete allAsteroids[i];
    });
}