// Меню бургер
const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.header__menu');
if (burger) {
	burger.addEventListener('click', function () {
		document.body.classList.toggle('lock');
		burger.classList.toggle('active');
		menu.classList.toggle('active');
	});
}

// Прокрутка меню при клике
const menuLinks = document.querySelectorAll('.header__menu-link[data-goto]');

function onMenuLinkClick(e) {
	const menuLink = e.target;
	if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
		const gotoBlock = document.querySelector(menuLink.dataset.goto);
		const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

		if (burger.classList.contains('active')) {
			document.body.classList.remove('lock');
			burger.classList.remove('active');
			menu.classList.remove('active');
		}

		window.scrollTo({
			top: gotoBlockValue,
			behavior: 'smooth',
		});
		e.preventDefault();
	}
}

if (menuLinks.length > 0) {
	menuLinks.forEach((menuLink) => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});
}

// Кнопка Наверх
const goUpBtn = document.querySelector('.up-btn');

window.addEventListener('scroll', trackScroll);
goUpBtn.addEventListener('click', backToTop);

function trackScroll() {
	const scrolled = window.pageYOffset;
	const coords = document.documentElement.clientHeight;

	if (scrolled > coords) {
		goUpBtn.classList.add('active');
	}
	if (scrolled < coords) {
		goUpBtn.classList.remove('active');
	}
}
// Скрол в начало страницы
function backToTop() {
	if (window.pageYOffset > 0) {
		// window.scrollBy(0, -50);
		// setTimeout(backToTop, 0);

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}
}

// Событие "клик" на офферной кнопке
const offerBtn = document.querySelector('.header__btn');
const form = document.querySelector('.fidback-form');
const overlayFidback = document.querySelector('.overlay__fidback');

function offerBtnClick() {
	form.classList.add('active');
	overlayFidback.classList.add('active');
	document.body.classList.toggle('lock');
}
offerBtn.addEventListener('click', offerBtnClick);

// Закрытие формы обратной связи
const closeButton = document.querySelector('.fidback-form__close-btn');

function closeFidbackForm() {
	form.classList.remove('active');
	overlayFidback.classList.remove('active');
	document.body.classList.remove('lock');
}
closeButton.addEventListener('click', closeFidbackForm);
overlayFidback.addEventListener('click', closeFidbackForm);

// Событие "клик" на ссылке в форме обратной связи
// Открываем форму согласия на обработку ПД
const fidbackFormLink = document.querySelector('.fidback-form__link');
const soglasieForm = document.querySelector('.soglasie');
const overlaySoglasie = document.querySelector('.overlay__soglasie');

function formLinkClick() {
	soglasieForm.classList.add('active');
	overlaySoglasie.classList.add('active');
	document.body.classList.add('lock');
}
fidbackFormLink.addEventListener('click', formLinkClick);

//Закрываем форму согласия на обработку ПД
const closeBtnSoglasie = document.querySelector('.soglasie__close-btn');

function closeSoglasieForm() {
	soglasieForm.classList.remove('active');
	overlaySoglasie.classList.remove('active');
	document.body.classList.remove('lock');
}
closeBtnSoglasie.addEventListener('click', closeSoglasieForm);
overlaySoglasie.addEventListener('click', closeSoglasieForm);

// Перевод в "строгий режим", добавляем "use strict";
// и оборачиваем в анонимную функцию,
// чтобы наши переменные не попали в глобальную область видимости
// (т.е. чтобы не было конфликта с другими скриптами)
// (function () {
//     // Строгий режим
//     "use strict";
// })();

// Маска ввода номера телефона
