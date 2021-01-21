// Get the elements with class="column"
var elements = document.getElementsByClassName('column');

// // Declare a loop variable
// var i;

// // List View
// function listView() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.width = '100%';
//   }
// }

// // Grid View
// function gridView() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.width = '50%';
//   }
// }

function myFunction() {
  const elements = document.getElementsByClassName('column');
  const button = document.getElementById('button');

  console.log('adsas');
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('grid');
  }

  if (button.innerHTML === 'view_module') {
    button.innerHTML = 'view_list';
  } else {
    button.innerHTML = 'view_module';
  }
}
