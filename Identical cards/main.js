/*********************************************************************
                        ВЫЗОВ ОСНОВНЫХ ФУНКЦИЙ
*********************************************************************/
//создаем карточки и помещаем их на поле
createCards(countCards);

function newLevel() {
    ++level;
    images.length = 0;
    deletedCard = 0;
    cardsField.innerHTML = '';

    if (level == 2) {
        countCards = countCards + 8;
        addOffsetHeight();
        addOffsetWidth();
    } else if (level == 3) {
        countCards = countCards + 6;
        addOffsetWidth();
    } else if (level == 4) {
        countCards = countCards + 6;
        addOffsetHeight();
    } else if (level == 5) {
        countCards = countCards + 12;
        addOffsetHeight();
        addOffsetWidth();
    }
    //создаем карточки и помещаем их на поле
    createCards(countCards);
}

function addOffsetWidth() {
    cardsField.style.width = cardsField.offsetWidth + 100 + 'px';
}

function addOffsetHeight() {
    cardsField.style.height = cardsField.offsetHeight + 100 + 'px';
}