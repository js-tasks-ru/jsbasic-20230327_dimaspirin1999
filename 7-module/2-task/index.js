import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = createElement(`
    <div class="modal">
      <!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title"></h3>
        </div>

        <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>

    </div>
    `);
    
    this.body = document.body;
    this.onCloseButton();
    this.onCloseEscape();
  }

  open() {
    this.body.append(this.elem);
    this.body.classList.add('is-modal-open');
  }

  setTitle(title) {
    let titleElem = this.elem.querySelector('.modal__title');
    titleElem.textContent = title; 
  }
  
  setBody(body) {
    let bodyElem = this.elem.querySelector('.modal__body');
    bodyElem.innerHTML = '';
    bodyElem.append(body);
  }

  close() {
    let body = document.body;
    let modalWinndow = body.querySelector('.modal');
    modalWinndow.remove();
    document.body.classList.remove('is-modal-open');
  }

  onCloseEscape() {
    const remove = () => {
      this.close();
      document.removeEventListener('keydown', remove);
    };
    document.addEventListener('keydown', remove);
  }

  onCloseButton() {
    let closeButton = this.elem.querySelector('.modal__close');
    closeButton.addEventListener('click', this.close);
  }
}

