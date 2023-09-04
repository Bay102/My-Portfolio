const cardTiles = [
  {
    item: 'front-end',
    open: 'rothschild',
    image: 'Photos/rothschild.png',
    div: 'React | Typescript',
    h3: 'Rothschild Trust',
  },
  {
    item: 'full-stack',
    open: 'RE-JATC',
    image: 'Photos/NonProfit.png',
    div: 'React | Firebase',
    h3: 'RE-JATC | Admins Portal',
  },
  {
    item: 'full-stack',
    open: 'extremeMachines',
    image: 'Photos/ExtremeMachines.png',
    div: 'React E-Commerce Store | JSON Server',
    h3: 'Extreme Machines',
  },
  {
    item: 'front-end',
    open: 'taskify',
    image: 'Photos/Screen Shot 2023-03-26 at 8.17.16 AM.png',
    div: 'React | Typescript',
    h3: 'Taskify ToDo App',
  },
  {
    item: 'front-end',
    open: 'saas',
    image: 'Photos/Screen Shot 2023-01-31 at 12.17.08 PM.png',
    div: 'HTML | CSS | Javascript',
    h3: 'Saas Website',
  },
  {
    item: 'full-stack',
    open: 'nancys',
    image: 'Photos/Screen Shot 2023-01-30 at 6.51.36 AM.png',
    div: 'Javascript',
    h3: 'Pet Care App',
  },
  {
    item: 'full-stack',
    open: 'cheatsave',
    image: 'Photos/cheatsave.png',
    div: 'React | Typescript | Express | SQLite',
    h3: 'A CheatCode App',
  },
  {
    item: 'front-end',
    open: 'cardValidator',
    image: 'Photos/Screen Shot 2023-02-06 at 2.03.27 PM.png',
    div: 'REACT',
    h3: 'Credit/Debit Card Validator',
  },
  {
    item: 'front-end',
    open: 'folio',
    image: 'Photos/Screen Shot 2023-01-31 at 8.08.24 PM.png',
    div: 'Javascript',
    h3: 'Folio',
  },
  {
    item: 'front-end',
    open: 'emoji',
    image: 'Photos/Screen Shot 2023-01-30 at 6.42.21 AM.png',
    div: 'React',
    h3: 'Slot Machine',
  },
  {
    item: 'front-end',
    open: 'debtCalc',
    image: 'Photos/Screen Shot 2023-01-31 at 8.16.40 AM.png',
    div: 'React',
    h3: 'Debt Calculator',
  },
  {
    item: 'full-stack',
    open: 'bark',
    image: '/Photos/Screen Shot 2023-01-30 at 6.14.31 AM.png',
    div: 'Javascript | API',
    h3: 'Dog Instagram',
  },
  {
    item: 'back-end',
    open: 'battleship',
    image: 'Photos/Screen Shot 2023-04-20 at 11.09.16 PM.png',
    div: 'Javascript | Terminal Based Game',
    h3: 'Battleship',
  },
  {
    item: 'full-stack',
    open: 'fanspace',
    image: '',
    div: 'Mobile App | React Native | Supabase',
    h3: 'FanSpace',
  },
  {
    item: 'full-stack',
    open: 'npc_members',
    image: '',
    div: 'React | Typescript | Firebase',
    h3: 'Members Portal | N.P.C',
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
    id: 'rothschild',
    h3: 'Rothschild Trust',
    link: '',
    image: 'Photos/rothschild.png',
    description: `<p><strong>The RothsChild Trust</strong></p>
    <p>This App caters to the everyday sports fanatic</p>
    <p></p> 
  `,
  },
  {
    id: 're-jatc',
    h3: 'RE-JATC',
    link: '',
    image: 'Photos/NonProfit.png',
    description: `<p><strong>Admins Portal</strong></p>
    <p>This App caters to the everyday sports fanatic</p>
    <p></p> 
  `,
  },
  {
    id: 'extremeMachines',
    h3: 'Extreme Machines',
    link: 'https://github.com/bay102/extrememachines',
    image: 'Photos/ExtremeMachines.png',
    description: `<p><strong>Extreme Machines</strong></p>
   <p>Inspired By GTA, This Project serves as a unique E-Commerce app</p>
   <p></p> 
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
    <p></p>
    <p></p> 
  `,
  },
  {
    id: 'cheatsave',
    h3: 'CheatSave',
    link: '',
    image: 'Photos/cheatsave.png',
    description: `<p><strong>A CheatCode App</strong></p>
    <p></p>
    <p></p> 
  `,
  },
  {
    id: 'fanspace',
    h3: 'FanSpace',
    link: '',
    image: '',
    description: `<p><strong>Sports App</strong></p>
    <p>This App caters to the everyday sports fanatic</p>
    <p></p> 
  `,
  },
  {
    id: 'RE-JATC',
    h3: 'RE-JATC',
    link: '',
    image: 'Photos/NonProfit.png',
    description: `<p><strong>Admins/Users Portal</strong></p>
    <p>This App provides a software solution for a non-profit</p>
    <p></p> 
  `,
  },
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
