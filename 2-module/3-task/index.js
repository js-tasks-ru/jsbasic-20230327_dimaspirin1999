const calculator = {
  read: (a, b) => {
    this.a = a;
    this.b = b;
  },
  sum: () => this.a + this.b,
  mul: () => this.a * this.b,
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
