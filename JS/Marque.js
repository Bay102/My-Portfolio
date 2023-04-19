const marqueItems = [ 
{ name: 'JAVASCRIPT', className: "fa-brands fa-square-js" },
{ name: 'DEV', className: "fab fa-dev" },
{ name: 'NODE', className: "fab fa-node" },
{ name: 'HTML5', className: "fa-brands fa-html5" },
{ name: 'REACT', className: "fab fa-react" },
{ name: 'GITHUB', className: "fab fa-github" },
{ name: 'CSS3', className: "fa-brands fa-css3-alt" },
];

const marqueeHero = document.querySelector(".marqueeHero");
for (const icon of marqueItems) {
  const listItem = document.createElement("li");
  const liContent = `
      <div class="icon-wrap">
      <i class="${icon.className}"></i>
      <div>${icon.name}</div>
      </div>
       `;
  listItem.innerHTML = liContent;
  marqueeHero.appendChild(listItem);
}

const marqueeAbout = document.querySelector(".marqueeAbout");

for (const icon of marqueItems) {
  const listItem = document.createElement("li");
  const liContent = `
  <div class="icon-wrap">
  <i class="${icon.className}"></i>
  <div>${icon.name}</div>
  </div>
       `;
  listItem.innerHTML = liContent;
  marqueeAbout.appendChild(listItem);
}

const rooot = document.documentElement;
const elmsDisplayed = getComputedStyle(rooot).getPropertyValue('--marquee-elms-displayed');
const marqueeContent = document.querySelector('ul.marquee-content'); 

rooot.style.setProperty('--marquee-elms', marqueeContent.children.length);

for (let i = 0; i < elmsDisplayed; i += 1) {
   marqueeContent.appendChild(marqueeContent.children[i]);
}