//функция создания блока конца игры
function gameOver() {
    //создаем элемент div
    let gameOver = document.createElement("div");
    //даем ему класс game_over
    gameOver.className = "game_over";
    //задаем текст
    gameOver.innerText = "Вы продержались: " + time.textContent;
    //добавляем на поле
    full.appendChild(gameOver);
    //создаем кнопку RESTART и добавляем ее на поле
    restartButton = document.createElement("button");
    //добавляем кнопке класс 
    restartButton.className = "restart";
    //и текст
    restartButton.innerText = "RESTART";
    //помещаем ее в блок gameOver
    gameOver.appendChild(restartButton);
}

//функция конца игры
function over() {
    //clearInterval(newAsteroids);
    //очищаем поле
    full.innerText = "";
    //даем статус конца игры
    status = 'over';
    //создаем блок конца игры
    gameOver();
    //вешаем обработчик события на кнопку restart
    restartButton.addEventListener('click', function() {
        //очищаем поле
        full.innerText = "";
        //запускаем игру
        restartGame();
    });
}