//функция создания корабля
function creatureShip() {
    ship = document.createElement("div");
    ship.id = "ship";
    full.appendChild(ship);
}

//функция передвижения корабля
function moveRect(e) {
    let css = getComputedStyle(ship);
    let left = parseInt(css.left);

    switch(e.keyCode) {
         
        case 37:  // если нажата клавиша влево
            if(left > 12 && left < 733) 
                ship.style.left = left - 72 + "px";
            break;
        case 39:   // если нажата клавиша вправо
            if(left > 11 && left < 732)
            ship.style.left = left + 72 + "px";
            break;
    }
}