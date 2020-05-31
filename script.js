// Находим по id кнопку open-modal
var openModalButton = document.getElementById('open-modal');


var modalWindow = document.getElementById('modal');

var modalCloseButton = document.getElementById('close-modal-button');


// Функция для открытия модального окна
function openModal() {
    modalWindow.classList.add('modal--visible');
}

// Функция для закрытия модального окна
function closeModal() {
    modalWindow.classList.remove('modal--visible');
}

openModalButton.addEventListener('click', function() {
    openModal();
});

// Проверка на нажатие modalWindow
modalWindow.addEventListener('click', function(event) {
    if (event.target === modalWindow) {
        closeModal();
    }
});

modalCloseButton.addEventListener('click', function(event) {
    if (event.target === modalCloseButton) {
        closeModal(); 
        console.log('123123');
    }
});

