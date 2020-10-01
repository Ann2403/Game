//функция конца игры
function gameOver() {
    //создаем элемент div
    let gameOver = document.createElement("div");
    //даем ему класс game_over
    gameOver.className = "game_over";
    //задаем текст
    gameOver.innerText = "Вы продержались: " + time.textContent;
    //добавляем на поле
    full.appendChild(gameOver);
}

function over() {
    full.innerText = "";
    status = 'over';
    gameOver();
}