import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    let categoriesLinks = '';

    for (let i = 0; i < this.categories.length; i++) {
      categoriesLinks += creatCategories(categories[i]);
    }

    this.elem = createElement(`
    <div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <nav class="ribbon__inner">
        ${categoriesLinks}
      </nav>
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
    `);
    document.addEventListener("DOMContentLoaded", () => initRibbon(this.elem));
  }
}

function creatCategories (category) {
  return `
  <a href="#" class="ribbon__item" data-id=${category.id}>${category.name}</a>
  `
};

function initRibbon(ribbon) {
  let arrowL = ribbon.querySelector('.ribbon__arrow_left');
  let arrowR = ribbon.querySelector('.ribbon__arrow_right');
  let ribbonInner = ribbon.querySelector('.ribbon__inner');
  const stepScroll = 350;

  arrowL.addEventListener('click', scrollL);
  arrowR.addEventListener('click', scrollR);

  function scrollL() {
    let scrollLeft = ribbonInner.scrollLeft;
    let scrollRight = ribbonInner.scrollWidth - ribbonInner.scrollLeft - ribbonInner.clientWidth;

    ribbonInner.scrollBy(-350, 0);
    
    if (scrollRight >= 0) {
      arrowR.classList.add('ribbon__arrow_visible')
    }

    if (scrollLeft <= 350) {
      arrowL.classList.remove('ribbon__arrow_visible')
    }
  };
  

  function scrollR() {
    let scrollRight = ribbonInner.scrollWidth - ribbonInner.scrollLeft - ribbonInner.clientWidth;
  
    ribbonInner.scrollBy(350, 0);
    console.log(ribbonInner.scrollLeft);
    if (ribbonInner.scrollLeft >= 0) {
      arrowL.classList.add('ribbon__arrow_visible')
    } 

    if (scrollRight < 350) {
      arrowR.classList.remove('ribbon__arrow_visible')
    }
  };
};



