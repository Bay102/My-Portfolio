const cardTiles = [
  {
    item: 'react',
    open: 'extremeMachines',
    image: 'Photos/ExtremeMachines.png',
    div: 'React E-Commerce Store',
    h3: 'Extreme Machines',
  },
  {
    item: 'react',
    open: 'taskify',
    image: 'Photos/Screen Shot 2023-03-26 at 8.17.16 AM.png',
    div: 'TypeScript & React',
    h3: 'Taskify ToDo App',
  },
  {
    item: 'web',
    open: 'nancys',
    image: 'Photos/Screen Shot 2023-01-30 at 6.51.36 AM.png',
    div: 'Javascript',
    h3: 'Pet Care App',
  },
  {
    item: 'web',
    open: 'saas',
    image: 'Photos/Screen Shot 2023-01-31 at 12.17.08 PM.png',
    div: 'HTML/CSS',
    h3: 'Saas Website',
  },
  {
    item: 'javascript',
    open: 'folio',
    image: 'Photos/Screen Shot 2023-01-31 at 8.08.24 PM.png',
    div: 'Javascript',
    h3: 'Folio',
  },
  {
    item: 'javascript',
    open: 'bark',
    image: '/Photos/Screen Shot 2023-01-30 at 6.14.31 AM.png',
    div: 'Javascript w/ API',
    h3: 'Dog Instagram',
  },
  {
    item: 'react',
    open: 'emoji',
    image: 'Photos/Screen Shot 2023-01-30 at 6.42.21 AM.png',
    div: 'React',
    h3: 'Slot Machine',
  },
  {
    item: 'react',
    open: 'debtCalc',
    image: 'Photos/Screen Shot 2023-01-31 at 8.16.40 AM.png',
    div: 'React',
    h3: 'Debt Calculator',
  },
  {
    item: 'react',
    open: 'cardValidator',
    image: 'Photos/Screen Shot 2023-02-06 at 2.03.27 PM.png',
    div: 'REACT',
    h3: 'Credit/Debit Card Validator',
  },
  {
    item: "javascript",
    open: "battleship",
    image: "Photos/Screen Shot 2023-04-20 at 11.09.16 PM.png",
    div: "Javascript",
    h3: "Battleship in the Terminal",
  },
  {
    item: "cheatsave",
    open: "cheatsave",
    image: "",
    div: "React/Typescript",
    h3: "A CheatCode App",
  },
  {
    item: "react",
    open: "fanspace",
    image: "",
    div: "Mobile App | React Native",
    h3: "FanSpace",
  },
  {
    item: "NPC Members",
    open: "npc_members",
    image: "",
    div: "React/Typescript",
    h3: "Members Portal | N.P.C",
  },

];

const portfolioGrid = document.querySelector('.portfolioTiles');

for (const tile of cardTiles) {
  const tiles = document.createElement('div');
  const tileContent = `
    <div class="portfolio-card" data-item="${tile.item}" data-open="${tile.open}">
    <div class="card-body">
      <img src="${tile.image}" alt="portfolio-icon">
      <div class="card-popup-box" >
        <div>${tile.div}</div>
        <h3>${tile.h3}</h3>
      </div>
    </div>
  </div>
    `;

  tiles.innerHTML = tileContent;
  portfolioGrid.appendChild(tiles);
}

const eachCard = document.querySelector('.portfolioPopups');

const serviceCards = [
  {
    id: 'extremeMachines',
    h3: 'Extreme Machines',
    link: '',
    image: 'Photos/ExtremeMachines.png',
    description: `<p><strong>Extreme Machines</strong></p>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
   enim ad minim veniam</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
   enim ad minim veniam</p> 
   `,
  },
  {
    id: 'bark',
    h3: 'Bark!',
    link: '',
    image: 'Photos/Screen Shot 2023-01-30 at 6.14.31 AM.png',
    description: `<p><strong>Dog Instagram with Api</strong></p>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
   enim ad minim veniam</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
   enim ad minim veniam</p> 
   `,
  },
  {
    id: 'taskify',
    h3: 'Taskify ToDo App',
    link: 'https://taskify-black.vercel.app',
    image: 'Photos/Screen Shot 2023-03-26 at 8.17.16 AM.png',
    description: `<p><strong>Taskify ToDo App</strong></p>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
   enim ad minim veniam</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
   enim ad minim veniam</p> 
   `,
  },
  {
    id: 'nancys',
    h3: 'Pet Care App',
    link: 'https://nancys-pet-care.vercel.app',
    image: 'Photos/Screen Shot 2023-01-30 at 6.51.36 AM.png',
    description: `<p><strong>Pet Boarding App</strong></p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam</p> 
  `,
  },
  {
    id: 'emoji',
    h3: 'React Game',
    link: 'https://emoji-slots.vercel.app ',
    image: 'Photos/Screen Shot 2023-01-30 at 6.42.21 AM.png',
    description: `<p><strong>Emoji Slot Machine Concept</strong></p>
    <p> ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam</p> 
  `,
  },
  {
    id: 'debtCalc',
    h3: 'Debt Calculator',
    link: '',
    image: 'Photos/Screen Shot 2023-01-31 at 8.16.40 AM.png',
    description: `
    <p><strong>Debt Calculator Built with React</strong></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam,</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam,</p> 
  `,
  },
  {
    id: 'saas',
    h3: 'Saas Website',
    link: 'https://front-saas-alpha.vercel.app',
    image: 'Photos/Screen Shot 2023-01-31 at 12.17.08 PM.png',
    description: `<p><strong>Saas Website</strong></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam</p> 
  `,
  },
  {
    id: 'folio',
    h3: 'Folio',
    link: 'https://folio-chi-eight.vercel.app ',
    image: 'Photos/Screen Shot 2023-01-31 at 8.08.24 PM.png',
    description: `<p><strong>Portfolio Concept</strong></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
     enim ad minim veniam</p> 
   `,
  },
  {
    id: 'cardValidator',
    h3: 'Card Validator',
    link: 'https://debt-calculator-y15q.vercel.app',
    image: 'Photos/Screen Shot 2023-02-06 at 2.03.27 PM.png',
    description: `<p><strong>Bank Card Validator</strong></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
     enim ad minim veniam</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
     enim ad minim veniam</p> 
  `,
  },
  {
    id: 'battleship',
    h3: 'Battleship',
    link: '',
    image: 'Photos/Screen Shot 2023-04-20 at 11.09.16 PM.png',
    description: `<p><strong>Battleship in the Terminal</strong></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
     enim ad minim veniam</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
     enim ad minim veniam</p> 
  `,
  },
  {
    id: 'cheatsave',
    h3: 'CheatSave',
    link: '',
    image: 'Photos/Screen Shot 2023-04-20 at 11.09.16 PM.png',
    description: `<p><strong>A CheatCode App</strong></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
     enim ad minim veniam</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
     enim ad minim veniam</p> 
  `,
  },
  {
    id: 'fanspace',
    h3: 'FanSpace',
    link: '',
    image: '',
    description: `<p><strong>Sports App</strong></p>
    <p>This App caters to the everyday sports fanatic</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
     enim ad minim veniam</p> 
  `,
  }
];

const createCards = () => {
  const cards = serviceCards
    .map(
      ({ id, h3, link, image, description }) =>
        `
      <div id="${id}" class="modal" data-animation="slideInOutTop">
      <div class="modal-dialog">
       <header class="modal-header">
          <h3>${h3}</h3>
          <i class="fas fa-times" data-service></i>
          </header>
          <h4>
          <a href="${link}">Click Here to Visit</a>
          </h4>
          <div class="modal-body">
          <div class="img-wrapper">
          <img src="${image}">
          </div>
          <div class="text-wrapper">
            ${description}
          </div>
       </div>
      </div>
    </div>
      `
    )
    .join('');
  eachCard.innerHTML = cards;
};

createCards();
