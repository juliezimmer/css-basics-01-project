// variable to store selected elements to be used later
// variable holds a reference to the HTML DOM element
// selecting the backdrop element
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

// select the modal no button
var modalNobutton = document.querySelector('.modal__action--negative');

// select 'Choose A Plan' button 
var selectPlanButtons = document.querySelectorAll('.button');
console.dir(selectPlanButtons);

// var selectPlanButton1 = document.querySelectorAll('.plan button');
// console.dir(selectPlanButton1);

// for loop to access the buttons in the NodeList and add an EventListener
for (var i = 0; i < selectPlanButtons.length; i++) {
   selectPlanButtons[i].addEventListener('click', function() {
      modal.style.display = 'block';
      backdrop.style.display = 'block';
   })
}

// closes modal
backdrop.addEventListener('click', closeModal); 
modalNobutton.addEventListener('click', closeModal);

function closeModal() {
   backdrop.style.display = 'none';
   modal.style.display = 'none';
}




  