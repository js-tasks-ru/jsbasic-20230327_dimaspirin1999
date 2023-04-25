function initCarousel() {
  let arrowR = document.querySelector('.carousel__arrow_right');
  let arrowL = document.querySelector('.carousel__arrow_left');
  let slides = document.querySelector('.carousel__inner');
  let slideWidth = slides.children[0].offsetWidth;
  let position = 0;
  let slidesWidth = (slides.children.length - 1) * slideWidth;
  
  function forward() {
    
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
