//получаем игровое поле
var full = document.querySelector("#full");

// Инициализируем переменные для хранения элементов игры:
//информационный блок с таймером 
var infoBlock, time,
//исходный таймер
sec = 0, min = 0,
//статус игры
status = 'start',
//жизней на игровом поле
lifes,
//корабля
ship,
//астероида
asteroid = null,
//пули
shot,
//массив для хранения всех выстрелов
shots = [],
//переменную для отображения id пули
numbetShot = 0,
//массив хранящий созданые астероиды
allAsteroids = [],
//кнопку перезапуска игры
restartButton;