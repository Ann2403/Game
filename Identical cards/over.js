function win() {
    cardsField.style.display = 'none';
    resetBlock.style.display = 'block';
    resetText.textContent = 'Вы прошли все 5 уровней!';
    resetBlock.appendChild(resetBtn);
}


//вешаем обработчик события (клик) на кнопку "Restart"
resetBtn.addEventListener('click', function() {
	//перезапускаем игру
	location.reload();
});