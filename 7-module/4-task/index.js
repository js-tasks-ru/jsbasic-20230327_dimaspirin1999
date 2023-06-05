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

    this.sliderValue = this.elem.querySelector('.slider__value');
    this.sliderSteps = this.elem.querySelector('.slider__steps');
    
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
    let thumb = this.elem.querySelector('.slider__thumb');
    let sliderSteps = this.elem.querySelector('.slider__steps');
    let sliderProgress = this.elem.querySelector('.slider__progress');

    const mouseMove = (event) => {
      event.preventDefault();
      this.elem.classList.add('slider_dragging');
      let left = event.clientX - this.elem.getBoundingClientRect().left; 
      let leftRelative = left / this.elem.offsetWidth;
      let activeStep = this.elem.querySelector('.slider__step-active');
      activeStep.classList.remove('slider__step-active');
  
      if (leftRelative < 0) {
        leftRelative = 0;
      }
  
      if (leftRelative > 1) {
        leftRelative = 1;
      }
  
      let leftPercents = leftRelative * 100;
  
      let progress = this.elem.querySelector('.slider__progress');
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;
  
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      
      this.sliderValue.textContent = value;
     
      this.sliderSteps.children[value].classList.add('slider__step-active');
    };

    const counter = (sliderEvent, value) => {
      this.elem.dispatchEvent(
        new CustomEvent(sliderEvent, {
          detail: value,
          bubbles: true
        })
      );
    };

    const mouseUp = (event) => {
      document.removeEventListener('pointermove', mouseMove);
      this.elem.classList.remove('slider_dragging');

      counter('slider-change', Number(this.sliderValue.textContent));
    };

    const startSlider = (event) => {
      thumb.classList.add('slider_dragging');
      
      let left = event.clientX - this.elem.getBoundingClientRect().left;

      let leftRelative = left/this.elem.offsetWidth;

      let activeStep = this.elem.querySelector('.slider__step-active');
      activeStep.classList.remove('slider__step-active');

      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;
      thumb.style.left = valuePercents + '%';
      sliderProgress.style.width = valuePercents + '%';
      this.sliderValue.textContent = value;
      sliderSteps.children[value].classList.add('slider__step-active');
    };

    this.elem.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      document.addEventListener('pointermove', mouseMove);
      document.addEventListener('pointerup' , mouseUp);
      
      startSlider(event);
    });

    this.elem.addEventListener('click', (event) => {
      event.preventDefault();
      
      startSlider(event);
      counter('slider-change', Number(this.sliderValue.textContent));
    })

    thumb.ondragstart = () => false;
  }
} 