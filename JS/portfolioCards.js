const cardTiles = [
  {
    item: 'comingSoon',
    open: '',
    image: 'Photos/comingSoon.png',
    div: 'Find your tech path...',
    h3: 'TechWayz',
  },
  {
    item: 'comingSoon',
    open: 'fanspace',
    image: 'Photos/comingSoon.png',
    div: 'An App for Season Tickets',
    h3: 'FanSpace',
  },
  {
    item: 'professional',
    open: 'RE-JATC',
    image: 'Photos/solar.png',
    div: 'Renewable Energy Joint Apprenticeship & Training Committee',
    h3: 'Internal App | RA-JATC',
  },
  {
    item: 'professional',
    open: 'rothschild',
    image: 'Photos/rothschild.png',
    div: 'Website for a Trust Company',
    h3: 'Rothschild Trust',
  },
  {
    item: 'personal',
    open: 'extremeMachines',
    image: 'Photos/ExtremeMachines.png',
    div: 'Mock E-Commerce App',
    h3: 'Extreme Machines',
  },
  {
    item: 'personal',
    open: 'taskify',
    image: 'Photos/Screen Shot 2023-03-26 at 8.17.16 AM.png',
    div: 'ToDo App',
    h3: 'Taskify ',
  },
  // {
  //   item: 'professional',
  //   open: 'saas',
  //   image: 'Photos/Screen Shot 2023-01-31 at 12.17.08 PM.png',
  //   div: 'HTML | CSS | Javascript',
  //   h3: 'Saas Website',
  // },
  {
    item: 'professional',
    open: 'nancys',
    image: 'Photos/Screen Shot 2023-01-30 at 6.51.36 AM.png',
    div: 'Pet Care App',
    h3: `Nancy's Pet Care`,
  },
  {
    item: 'personal',
    open: 'cheatsave',
    image: 'Photos/cheatsave.png',
    div: 'A CheatCode App',
    h3: 'Cheat Save',
  },
  // {
  //   item: 'personal',
  //   open: 'cardValidator',
  //   image: 'Photos/Screen Shot 2023-02-06 at 2.03.27 PM.png',
  //   div: 'REACT',
  //   h3: 'Credit/Debit Card Validator',
  // },
  {
    item: 'professional',
    open: 'folio',
    image: 'Photos/Screen Shot 2023-01-31 at 8.08.24 PM.png',
    div: 'Javascript',
    h3: 'Folio',
  },
  // {
  //   item: 'personal',
  //   open: 'emoji',
  //   image: 'Photos/Screen Shot 2023-01-30 at 6.42.21 AM.png',
  //   div: 'React',
  //   h3: 'Slot Machine',
  // },
  // {
  //   item: 'personal',
  //   open: 'debtCalc',
  //   image: 'Photos/Screen Shot 2023-01-31 at 8.16.40 AM.png',
  //   div: 'React',
  //   h3: 'Debt Calculator',
  // },
  // {
  //   item: 'full-stack',
  //   open: 'bark',
  //   image: '/Photos/Screen Shot 2023-01-30 at 6.14.31 AM.png',
  //   div: 'Javascript | API',
  //   h3: 'Dog Instagram',
  // },
  {
    item: 'personal',
    open: 'battleship',
    image: 'Photos/Screen Shot 2023-04-20 at 11.09.16 PM.png',
    div: 'Terminal Based Game',
    h3: 'Battleship',
  },

  // {
  //   item: 'comingSoon',
  //   open: 'npc_members',
  //   image: 'Photos/comingSoon.png',
  //   div: 'React | Typescript | Firebase',
  //   h3: 'Members Portal | N.P.C',
  // },
]

const portfolioGrid = document.querySelector('.portfolioTiles')

for (const tile of cardTiles) {
  const tiles = document.createElement('div')
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
    `

  tiles.innerHTML = tileContent
  portfolioGrid.appendChild(tiles)
}

const eachCard = document.querySelector('.portfolioPopups')

const serviceCards = [
  {
    id: 'rothschild',
    h3: 'Rothschild Trust',
    link: 'https://rothschildtrust.org',
    image: 'Photos/rothschild.png',
    description: `<p><strong>The RothsChild Trust</strong></p>
    <p></p>
    <p></p> 
  `,
  },
  {
    id: 're-jatc',
    h3: 'RE-JATC',
    link: '',
    image: 'Photos/solar.png',
    description: `<p><strong>Admins Portal</strong></p>
    <p>Renewable Energy Joint Apprenticeship Training Committee</p>
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
  // {
  //   id: 'bark',
  //   h3: 'Bark!',
  //   link: '',
  //   image: 'Photos/Screen Shot 2023-01-30 at 6.14.31 AM.png',
  //   description: `<p><strong>Dog Instagram with Api</strong></p>
  //  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //  enim ad minim veniam</p>
  //  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //  enim ad minim veniam</p>
  //  `,
  // },
  {
    id: 'taskify',
    h3: 'Taskify ToDo App',
    link: 'https://taskify-black.vercel.app',
    image: 'Photos/Screen Shot 2023-03-26 at 8.17.16 AM.png',
    description: `<p><strong>Taskify ToDo App</strong></p>
   <p></p>
   <p></p> 
   `,
  },
  // {
  //   id: 'nancys',
  //   h3: 'Pet Care App',
  //   link: 'https://nancys-pet-care.vercel.app',
  //   image: 'Photos/Screen Shot 2023-01-30 at 6.51.36 AM.png',
  //   description: `<strong>Pet Boarding App</strong> `,
  // },
  // {
  //   id: 'emoji',
  //   h3: 'React Game',
  //   link: 'https://emoji-slots.vercel.app ',
  //   image: 'Photos/Screen Shot 2023-01-30 at 6.42.21 AM.png',
  //   description: `<p><strong>Emoji Slot Machine Concept</strong></p>
  //   <p>></p>
  //   <p></p>
  // `,
  // },
  // {
  //   id: 'debtCalc',
  //   h3: 'Debt Calculator',
  //   link: '',
  //   image: 'Photos/Screen Shot 2023-01-31 at 8.16.40 AM.png',
  //   description: `
  //   <p><strong>Debt Calculator Built with React</strong></p>
  //   <p></p>
  //   <p></p>
  // `,
  // },
  // {
  //   id: 'saas',
  //   h3: 'Saas Website',
  //   link: 'https://front-saas-alpha.vercel.app',
  //   image: 'Photos/Screen Shot 2023-01-31 at 12.17.08 PM.png',
  //   description: `<p><strong>Saas Website</strong></p>
  //   <p></p>
  //   <p></p>
  // `,
  // },
  {
    id: 'folio',
    h3: 'Folio',
    link: 'https://folio-chi-eight.vercel.app ',
    image: 'Photos/Screen Shot 2023-01-31 at 8.08.24 PM.png',
    description: `<p><strong>Portfolio Concept</strong></p>
    <p></p>
     <p></p> 
   `,
  },
  // {
  //   id: 'cardValidator',
  //   h3: 'Card Validator',
  //   link: 'https://debt-calculator-y15q.vercel.app',
  //   image: 'Photos/Screen Shot 2023-02-06 at 2.03.27 PM.png',
  //   description: `<p><strong>Bank Card Validator</strong></p>
  //   <p></p>
  //   <p></p>
  // `,
  // },
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
    image: 'Photos/comingSoon.png',
    description: `<p><strong>Sports App</strong></p>
    <p>This App caters to the everyday sports fanatic</p>
    <p></p> 
  `,
  },
  {
    id: 'RE-JATC',
    h3: 'RE-JATC',
    link: 'https://lrtportal.vercel.app/',
    image: 'Photos/solar.png',
    description: `<p><strong>Renewable Energy Joint Apprenticeship & Training Committee </strong></p>
    <p>This App was developed for the supervisors / apprentices of REJATC's training program. This app is used daily to keep track of hours and reports of the apprentices of this solar company</p>
    <p></p> 
  `,
  },
]

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
          </h4>
          <div class="modal-body">
          <div class="img-wrapper">
          <img src="${image}">
          </div>
          <div class="text-wrapper">
          ${description}
          </div>
          </div>
          <a href="${link}">Click Here to Visit</a>
      </div>
    </div>
      `
    )
    .join('')
  eachCard.innerHTML = cards
}

createCards()
