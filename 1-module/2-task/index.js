/**
 * Эту функцию трогать не нужно
 */
function xprint(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {

  return !!name && !name.includes(' ') && name.length >= 4;

 /* if (name == null) {
    return false;
  }
 
  if (name == '') {
    return false;
  } 

  if (name.length < 4) {
    return false;
  } 

  for (let i = 0; i < name.length; i++) {
    if (name[i] == ' ') {
      return false;
    }
  } 

  return true;*/
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
