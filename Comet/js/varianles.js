//получаем игровое поле
var full = document.querySelector("#full");

// Инициализируем переменные для хранения элементов игры:
//жизней на игровом поле
var lifes,
//корабля
ship,
//астероида
asteroid = null,
//массив хранящий созданые астероиды
allAsteroids = [];