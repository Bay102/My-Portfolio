const marqueItems = [
  { className: "fab fa-github" },
  { className: "fab fa-codepen" },
  { className: "fab fa-dev" },
  { className: "fab fa-react" },
  { className: "fab fa-vuejs" },
  { className: "fab fa-angular" },
  { className: "fab fa-node" },
  { className: "fab fa-aws" },
  { className: "fab fa-docker" },
  { className: "fab fa-android" },
];


const marqueeHero = document.querySelector(".marqueeHero");
for (const icon of marqueItems) {
  const listItem = document.createElement("li");
  const liContent = `
      <i class="${icon.className}"></i>
       `;
  listItem.innerHTML = liContent;
  console.log(listItem);

  marqueeHero.appendChild(listItem);
}

const marqueeAbout = document.querySelector(".marqueeAbout");

for (const icon of marqueItems) {
  const listItem = document.createElement("li");
  const liContent = `
      <i class="${icon.className}"></i>
       `;
  listItem.innerHTML = liContent;
  console.log(listItem);
  marqueeAbout.appendChild(listItem);
}


