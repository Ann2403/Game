//задаем начальное количество жизней
var quantityLifes = 5;
//создаем блок с жизнями
creatureLifes();
//создаем корабль
creatureShip();
//делаем его подвижным (вешаем обработчик события на клавиатуру)
addEventListener('keydown', moveRect);