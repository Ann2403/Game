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
    
    let unic, positionAsteroid;
    do {
        //определяем рандомное число в пределах размеров поля
        positionAsteroid = random(20, 720);
        unic = true;
        for (a = 0; a < allAsteroids.length; a++) {
            let positionNowAsteroid = parseInt(allAsteroids[a].style.left);
            if(positionAsteroid < (positionNowAsteroid + 30) && positionAsteroid > (positionNowAsteroid - 30)) {
                //задаем что такое число уже было
                unic = false;
                //и выходим с перебора массива
                break;
            }
        }
    } while (!unic);
    //задаем исходное положение астероида относительно левого края
    asteroid.style.left = positionAsteroid + "px";
    console.log(a);
    console.log(allAsteroids.length);
}

//функция падения астероида
function moveAsteroid(getAsteroid) {
    setInterval(() => {
        getAsteroid.style.top = getAsteroid.offsetTop + 200 + "px";
    if (getAsteroid.offsetTop > 720) {
        getAsteroid.remove();
    }
    }, 10);
}

function getAsteroids() {
    allAsteroids.forEach(function(element, i) {
        moveAsteroid(element);
        delete allAsteroids[i];
    });
}