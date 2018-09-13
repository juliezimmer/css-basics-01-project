// variable holds a reference to the HTML DOM element
// selecting the backdrop element
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

// select the modal 'no' button
var modalNoButton = document.querySelector('.modal__action--negative');

// select 'Choose A Plan' button 
var selectPlanButtons = document.querySelectorAll('.button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector(".main-nav__item--cta");

console.dir(backdrop);
console.dir(backdrop.style.display);

// var selectPlanButton1 = document.querySelectorAll('.plan button');
// for loop to access the buttons in the NodeList and add an EventListener
for (var i = 0; i < selectPlanButtons.length; i++) {
   selectPlanButtons[i].addEventListener('click', function() {
      modal.classList.add('open');   
      backdrop.classList.add('open');
   });
}

// closes modal
backdrop.addEventListener('click', function(){
   mobileNav.classList.remove('open'); 
   closeModal();
}); 

// this only returns true if a valid reference to the button is found:
if (modalNoButton) {
   modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
   if (modal) {
      modal.classList.remove('open');
   }
   backdrop.classList.remove('open');
}

// add an event listener to the toggle-button/hanburger menu icon
toggleButton.addEventListener('click', function(){
   mobileNav.classList.add('open'); 
   backdrop.classList.add('open');
})

// event listener for cta button
ctaButton.addEventListener('animationstart', function(event) {
   console.log('Animation started', event);
})

ctaButton.addEventListener('animationend', function(event) {
   console.log("Animation ended", event);
})
  
ctaButton.addEventListener('animationiteration', function(event) {
   console.log("Animation iteration", event);
})