import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    let carouselSlides = '';

    for (let i = 0; i < this.slides.length; i++) {
      carouselSlides += `${createSlide(slides[i])}`;
    }

    this.elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
          ${carouselSlides}
        </div>
      </div>
    `
    );

    initCarousel(this.elem);
    buttonClick(this.elem);
  }
}

function createSlide (slide) {
  return `
  <div class="carousel__slide" data-id="${slide.id}">
    <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
    <div class="carousel__caption">
      <span class="carousel__price">€${slide.price.toFixed(2)}</span>
      <div class="carousel__title">${slide.name}</div>
      <button type="button" class="carousel__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>
  </div>
  `
}

function initCarousel(slider) {
  let arrowR = slider.querySelector('.carousel__arrow_right');
  let arrowL = slider.querySelector('.carousel__arrow_left');
  let slides = slider.querySelector('.carousel__inner');
  let position = 0;
  
  function forward() {
    let slideWidth = slides.children[0].offsetWidth;
    let slidesWidth = (slides.children.length - 1) * slideWidth;

    if (position == (slidesWidth - slideWidth)) {
      arrowR.style.display = 'none';
    } 
    
    if (position >= 0) {
      arrowL.style.display = '';
    } 

    if (position >= slidesWidth) {
      return;
    }
    
    position += slideWidth;
    slides.style.transform = `translateX(-${position}px)`;
  };

  arrowL.style.display = 'none';

  function backward() {
    let slideWidth = slides.children[0].offsetWidth;
    let slidesWidth = (slides.children.length - 1) * slideWidth;

    if (position == slideWidth) {
      arrowL.style.display = 'none';
    } 

    if (position !== (slidesWidth - slideWidth)) {
      arrowR.style.display = '';
    }
    
    if (position <= 0) {
      return;
    } 
    
    position = position - slideWidth;
    slides.style.transform = `translateX(-${position}px)`;
  };

  arrowR.addEventListener('click', forward);
  arrowL.addEventListener('click', backward);
}

function buttonClick(elem) {
  let buttons = elem.querySelectorAll('.carousel__button');
  
  Array.from(buttons).forEach(item => {
    item.addEventListener('click' , (event) => {
      let parrent = item.closest('.carousel__slide');
      let dataId = parrent.getAttribute('data-id');
      event.target.dispatchEvent(
        new CustomEvent("product-add", {
          detail: dataId, 
          bubbles: true
        })
      );
    });
  });
} 

