function mainFunction() {
  const headers = document.getElementById('headers');
  const elements = document.getElementsByClassName('column');
  const button = document.getElementById('button');

  // column headers toggle
  headers.classList.toggle('grid-headers');

  // grid class toggle
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('grid');
  }

  // list/grid icon toggle
  if (button.innerHTML === 'view_module') {
    button.innerHTML = 'view_list';
  } else {
    button.innerHTML = 'view_module';
  }
}
