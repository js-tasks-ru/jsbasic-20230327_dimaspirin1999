import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = createElement(`
    <div class="slider">

      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb" style="left: 0%;">
        <span class="slider__value">${this.value}</span>
      </div>

      <!--Заполненная часть слайдера-->
      <div class="slider__progress" style="width: 0%;"></div>

      <!--Шаги слайдера-->
      <div class="slider__steps"></div>
    </div>
    `);

    this.createSteps();
    this.changeSlider();
  }

  createSteps() {
    let sliderSteps = this.elem.querySelector('.slider__steps');
    let step = '';

    for (let i = 0; i < this.steps; i++) {
      step += '<span></span>';
    };
    
    sliderSteps.innerHTML = step;
    sliderSteps.children[this.value].classList.add('slider__step-active');
  }

  changeSlider() {
    this.elem.addEventListener('click', (event) => {
      let sliderThumb = this.elem.querySelector('.slider__thumb');
      let sliderProgress = this.elem.querySelector('.slider__progress');
      let sliderValue = this.elem.querySelector('.slider__value');
      let left = event.clientX - this.elem.getBoundingClientRect().left;

      let leftRelative = left/this.elem.offsetWidth;

      let activeStep = this.elem.querySelector('.slider__step-active');
      activeStep.classList.remove('slider__step-active');

      let sliderSteps = this.elem.querySelector('.slider__steps');
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;
      sliderThumb.style.left = valuePercents + '%';
      sliderProgress.style.width = valuePercents + '%';
      sliderValue.textContent = value;
      sliderSteps.children[value].classList.add('slider__step-active');
      
      this.elem.dispatchEvent(
        new CustomEvent('slider-change', {
          detail: Number(sliderValue.textContent),
          bubbles: true
        })
      );
    });
  }
}
