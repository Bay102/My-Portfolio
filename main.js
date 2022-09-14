
const modalOpen ='[data-open]';
const modalClose ='[data-close]';
const isVisible = 'is-visible';

const root = document.documentElement; 

const elmsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elms-displayed');
const marqueeContent = document.querySelector('ul.marquee-content');

root.style.setProperty('--marquee-elms', marqueeContent.children.length);

console.log(marqueeContent.children.length);

for (let i = 0; i < elmsDisplayed; i += 1) {
   marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
};



const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);