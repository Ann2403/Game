/**************************************************************************
                        БЛОК ИНИЦИАЛИЗАЦИИ ПЕРЕМЕННЫХ
**************************************************************************/
//задаем начальное количество жизней
var quantityLifes = 5;


/**************************************************************************
                            БЛОК ВЫЗОВА ФУНКЦИЙ
**************************************************************************/
function startGame() {
    //создаем информационный блок с таймером
    creatureInfoBlock();
    //запускаем таймер
    timerGame();
    //создаем блок с жизнями
    creatureLifes();

    //создаем корабль
    creatureShip();
    //делаем его подвижным (вешаем обработчик события на клавиатуру)
    addEventListener('keydown', moveRect);

    //создаем астероиды
    asteroids(2, 5);
    //приводим все астероиды в движение
    getAsteroids();

    //каждые 2 секунды 
    let newAsteroids = setInterval(() => {
        //если статус игры не "завершен"
        if (status != 'over') {
            //очищаем массив с астероидов
            allAsteroids.length = 0;
            //если времени меньше минуты
            if(min < 1) {
                //создаем астероиды от 1 до 3
                asteroids(1, 3);
                //если 1,5 минуты
            } else if (min == 1 && sec < 30) {
                //создаем астероиды от 2 до 4
                asteroids(2, 4);
                //если просло больше 2 минут
            } else {
                //создаем астероиды от 3 до 6
                asteroids(3, 6);
            }
            
            //приводим их в движение
            getAsteroids();
        } else {
            //останавливаем интервал создания новых астероидов
            clearInterval(newAsteroids);
        }
    }, 2000); 
}

//запускаем игру
startGame();

//функция перезапуска игры
function restartGame() {
    //обновляем время начала игры
    min = 0;
    sec = 0;
    //количество жизней
    quantityLifes = 5;
    //массив с астероидами
    allAsteroids.length = 0;
    //запускаем функцию старта игры
    startGame();
    //присваиваем статус 'play'
    status = 'play';
}