function toggleText() {
  let button = document.body.querySelector('.toggle-text-button');
  button.onclick = function() {
    let text = document.getElementById('text');

    if (text.hidden) {
      text.hidden = false;
    } else {
      text.hidden = true;
    }
  }
}
