//функция для определения рандомного числа от min до max
function random(min, max) {
    //генерируем рандомное число
    var rand = min + Math.random() * (max-min);
    //округляем до целого числа
    rand = Math.floor(rand);
    //возвращаем число для использования вне данной функции
    return rand;
}