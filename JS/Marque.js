const marqueItems = [
  { name: 'HTML5', className: 'fa-brands fa-html5' },
  { name: 'CSS3', className: 'fa-brands fa-css3-alt' },
  { name: 'JAVASCRIPT', className: 'fa-brands fa-square-js' },
  { name: 'TYPESCRIPT', className: '' },
  { name: 'REACT', className: 'fab fa-react' },
  { name: 'SQL', className: '' },
  { name: 'MONGO.DB', className: '' },
  { name: 'GITHUB', className: 'fab fa-github' },
  { name: '', className: 'fab fa-node' },
];

const marqueeHero = document.querySelector('.marqueeHero');
for (const icon of marqueItems) {
  const listItem = document.createElement('li');
  const liContent = `
      <div class="icon-wrap">
      <i class="${icon.className}"></i>
      <div class="">${icon.name}</div>
      </div>
       `;
  listItem.innerHTML = liContent;
  marqueeHero.appendChild(listItem);
}

const marqueeAbout = document.querySelector('.marqueeAbout');

for (const icon of marqueItems) {
  const listItem = document.createElement('li');
  const liContent = `
  <div class="icon-wrap">
  <i class="${icon.className}"></i>
  <div class="">${icon.name}</div>
  </div>
       `;
  listItem.innerHTML = liContent;
  marqueeAbout.appendChild(listItem);
}

const rooot = document.documentElement;
const elmsDisplayed = getComputedStyle(rooot).getPropertyValue(
  '--marquee-elms-displayed'
);
const marqueeContent = document.querySelector('ul.marquee-content');

rooot.style.setProperty('--marquee-elms', marqueeContent.children.length);

// for (let i = 0; i < elmsDisplayed; i += 1) {
//   marqueeContent.appendChild(marqueeContent.children[i]);
// }
