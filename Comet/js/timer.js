//функция создания таймера
function creatureInfoBlock() {
    //создаем элемент div
    infoBlock = document.createElement("div");
    //даем ему класс info_block
    infoBlock.className = "info_block";
    //добавляем на поле
    full.appendChild(infoBlock);
    //создаем элемент span для отсчета времени 
    time = document.createElement("span");
    //добавляем ему исходный текст
    time.innerText =  sec + " сек";
    //добавляем его в заголовок h2
    infoBlock.appendChild(time);
}

// функция для отсчета времени игры
function timerGame() {
    //каждую секунду
    let clock = setInterval(function() {
        //добавляем секунду
        sec++;
        //если количество секунд достигло 60
        if (sec == 60) {
            //обнуляем переменную с секундами
            sec = 0;
            //и добаляем минуту
            min++;
        }
        // отображение времени на табло
        if(min != 0) {
            time.innerText = min + " мин " + sec + " сек";
        } else {
            time.innerText = sec + " сек";
        }
        // если жизни закончились
        if (quantityLifes == 0) {
            //останавливаем таймер
            clearInterval(clock);
        }
    }, 1000);
}
