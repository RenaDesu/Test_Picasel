const mainHeaderToggle = document.querySelector('.main-header__toggle');
const mainNavCloseBtn = document.querySelector('.main-nav__close-button');
const mainNav = document.querySelector('.main-nav');

const slides = document.querySelectorAll('.slider__slide');
const sliderLine = document.querySelector('.slider__line');
const sliderDots = document.querySelectorAll('.slider__dot');
const sliderBtnNext = document.querySelector('#next');
const sliderBtnPrev = document.querySelector('#prev');

const popUpBtn = document.querySelector('#plan-btn');
const popUp = document.querySelector('.modal-container');
const popUpCloseBtn = document.querySelector('.modal-container__close-button');
const form = document.querySelector('.form');

// Burger menu

mainHeaderToggle.addEventListener('click', () => {
  mainNav.classList.remove('main-nav--closed');
  mainNavCloseBtn.classList.remove('main-nav__close-button--closed');
});

mainNavCloseBtn.addEventListener('click', () => {
  mainNav.classList.add('main-nav--closed');
  mainNavCloseBtn.classList.add('main-nav__close-button--closed');
});

// PopUp
popUpBtn.addEventListener('click', () => {
  popUp.classList.remove('modal-container--closed');
});

popUpCloseBtn.addEventListener('click', () => {
  popUp.classList.add('modal-container--closed');
});

form.addEventListener('submit', () => {
  popUp.classList.add('modal-container--closed');
});

//Slider

let sliderCount = 0;
let sliderWidth;

function showSlide() {
  sliderWidth = document.querySelector('.hero-section__slider').offsetWidth;
  sliderLine.style.width = sliderWidth * slides.length + 'px';
  slides.forEach(item => item.style.width = sliderWidth + 'px');
  rollSlider();
}

window.addEventListener('resize', showSlide);
showSlide();

function nextSlide() {
  sliderCount++;
  if (sliderCount >= slides.length) {
    sliderCount = 0;
  };
  rollSlider();
}

function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = slides.length - 1;
  };
  rollSlider();
}

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

function currentSlide(index) {
  sliderDots.forEach(item => item.classList.remove('slider__dot--active'));
  sliderDots[index].classList.add('slider__dot--active');
}

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    currentSlide(sliderCount);
  })
})
