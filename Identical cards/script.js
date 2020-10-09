//функция создания карточек
function createCards(colCards) {
	//добавляем карточки на поле
	for (let i = 0; i < colCards; i++) {
		//создаем карточку
		let li = document.createElement("li");
		//присваиваем ей id=номер по порядку
		li.id = i;
		//добавляем карточки на поле
		cardsField.appendChild(li);
		//если уровень игры 2 и номер карточки 12, либо уровень-5 и номер-24
		if(level == 2 && i == 12 || level == 5 && i == 24) {
			//получаем данную карточку
			console.log(document.getElementsByTagName('li')[i]);
			//даем ей отступ равный ширине карточки
			document.getElementsByTagName('li')[i].style.marginLeft = '100px';
		}
	}
	addImg(colCards);
}

//функция добавления изображений на карточки
function addImg(colCards) {
	//инизиализируем переменные для перебора карточек
	let i = 0,
	//отображения уникальности числа и самого числа
	unic, n;
	//выбираем каждую карточку
	while (i < colCards) {
		do {
			//задаем что число уникальное
			unic = true;
			//генерируем случайное число от 1 до количества карточек
			n = Math.floor(Math.random() * colCards + 1);
			//перебираем массив с карточек
			for (a = 0; a < colCards; a++) {
				//если сгенерированое число уже занесено в массив
				if (n == images[a]) {
					//задаем что такое число уже было
					unic = false;
					//и выходим с перебора массива
					break;
				}
			}
		//повторяем генерацию числа
		} while (!unic);
		//добавляем уникальное число в массив
		images[i] = n;
		//переходим к следующей итерации
		i++;
	}

	i = 0;
	//перебираем заполнениый массив с карточками
	while (i < colCards) {
		//если число в массиве больше половины количества карточек
		if(images[i] > (colCards/2)) {
			//отнимаем от него половину количества карточек
			images[i] = images[i] - (colCards/2);
		}
		//переходим к следующей итерации
		i++;
	}
}

//вешаем обработчик события (клик) на карточки
cardsField.addEventListener('click', function(event) {
	//если выбрано меньше 2 карточек
	if(selected.length < 2) {
		//выбираем элемент на которую был сделан клик
		let element = event.target;
		//проверяем элемент на соответсвие тегу LI и отсутствие класса "active"
		if(element.tagName == "LI" && element.className != "active") {
			//добавляем в массив наш элемент (карточку)
			selected.push(element);
			//задаем ему класс "active" для отображения картинки
			element.className = "active";
			//инициализируем переменную для хранения номера изображения который
			//хранится в массиве images под номером ячейки соответсвующей его id
			let img = images[element.id];
			//присваиваем ему картинку
			element.style.background = "url(images/" + img + ".jpg)";
			//если выбрано 2 элемента
			if(selected.length == 2) {
				//если значение первой выбранной карточки в массиве images равно второй карточке
				if(images[selected[0].id] == images[selected[1].id]) {
					setTimeout(() => {
						//скрываем обе карточки
						selected[0].style.visibility = "hidden";
						selected[1].style.visibility = "hidden";
					}, 1000);
					
					//увеличиваем количество удаленных карточек на 2
					deletedCard = deletedCard + 2;
				}
				//через 1 с вызываем функцию refreshCards
				setTimeout(refreshCards, 1000);
			}
		}
	}
});

//функция закрытия карточек
function refreshCards() {
	//перебираем все карточки
	for (let i = 0; i < countCards; i++) {
		//убираем имя класса
		cardsField.children[i].className = "";
		//вешаем картинку "закрытой" карточки
		cardsField.children[i].style.backgroundImage = 'url("images/closed.jpg")';
	}
	//очищаем массив с выбраными карточками
	selected = [];
	//если количество удаленых карточек равна общему их количеству и уровень достиг последнего
	if(deletedCard == countCards) {
		if (level == 5) {
			//отображаем блок окончания игры победителя
			win();
		}
		//запускаем новый уровень
		newLevel();
	} 
}