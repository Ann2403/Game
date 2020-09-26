//функция создание блока с жизнями
function creatureLifes() {
    //создаем элемент div
    lifes = document.createElement("div");
    //присваиваем ему класс для свойств css
    lifes.className = "lifes";
    //добавляем его на игровое поле
    full.appendChild(lifes);

    //инициализируем переменную для хранения текущего количества жизней
    var currentQuantityLifes = 0;
    //пока количество текущих жизней меньше заданого начального количества
    while (currentQuantityLifes < quantityLifes) {
        //создаем элемент span
        span = document.createElement("span");
        //добавляем его в блок жизней
        lifes.appendChild(span);
        //увеличиваем текущее количество жизней
        currentQuantityLifes = currentQuantityLifes + 1;
    }
}