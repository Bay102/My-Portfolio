
//// -------------------- MODAL STUFF ------------------------ //////
const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';
const serviceClose = '[data-service]';

// this will store any element that has "[data-open]" in a node list 
const openModal = document.querySelectorAll(modalOpen);

// this will store any element that has "[data-close]" in a node list 
const closeModal = document.querySelectorAll(modalClose);

//
const closeService = document.querySelectorAll(serviceClose);

// for of loop to iterate through node list of queried elements above 
//  and adding eventlistener to each one 
for (const elm of openModal) { // open Modal buttons
   elm.addEventListener('click', function() {
      const modalId = this.dataset.open;  // "this" is referring to the parent Element
      document.getElementById(modalId).classList.add(isVisible)
   })
}

for (const elm of closeModal) { // close modal buttons 
   elm.addEventListener('click', function() {
      this.parentElement.parentElement.parentElement.classList.remove(isVisible)
   })
}


document.addEventListener('click', (e) => {
   if (e.target === document.querySelector('.modal.is-visible')) {
      document.querySelector('.modal.is-visible').classList.remove(isVisible);
   }
})

document.addEventListener('keyup', (e) => {
   if(e.key === 'Escape') {
      document.querySelector('.modal.is-visible').classList.remove(isVisible);
   }
});

for (const elm of closeService) {
   elm.addEventListener("click", function() {
      this.parentElement.parentElement.parentElement.classList.remove(isVisible)
   })
}








