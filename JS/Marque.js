const marqueItems = [
  { className: "fab fa-github" },
  { className: "fab fa-codepen" },
  { className: "fab fa-dev" },
  { className: "fab fa-react" },
  { className: "fab fa-node" },
  { className: "fa-brands fa-html5" },
  { className: "fa-brands fa-css3-alt" },
  { className: "fa-brands fa-square-js" },
];

const marqueeHero = document.querySelector(".marqueeHero");
for (const icon of marqueItems) {
  const listItem = document.createElement("li");
  const liContent = `
      <i class="${icon.className}"></i>
       `;
  listItem.innerHTML = liContent;
  marqueeHero.appendChild(listItem);
}

const marqueeAbout = document.querySelector(".marqueeAbout");

for (const icon of marqueItems) {
  const listItem = document.createElement("li");
  const liContent = `
      <i class="${icon.className}"></i>
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