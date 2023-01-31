const cardTiles = [
   {
      item: "bark",
      open: "bark",
      image: "/Photos/Screen Shot 2023-01-30 at 6.14.31 AM.png" ,
      div: "Bark!" ,
      h3: "Doggie Adoption App",
    },
    {
      item: "NancysPetCare",
      open: "nancys",
      image: "Photos/Screen Shot 2023-01-30 at 6.51.36 AM.png" ,
      div: "NancysPetCare" ,
      h3: "Pet Care WebApp",
    },
    {
      item: "EmojiSlots",
      open: "emoji",
      image: "Photos/Screen Shot 2023-01-30 at 6.42.21 AM.png" ,
      div: "Bark!" ,
      h3: "Emoji Slot Machine",
    },
    {
      item: "bark",
      open: "bark",
      image: "" ,
      div: "Bark!" ,
      h3: "Doggie Adoption App",
    },
    {
      item: "bark",
      open: "bark",
      image: "" ,
      div: "Bark!" ,
      h3: "Doggie Adoption App",
    },
    {
      item: "bark",
      open: "bark",
      image: "" ,
      div: "Bark!" ,
      h3: "Doggie Adoption App",
    },
    {
      item: "bark",
      open: "bark",
      image: "" ,
      div: "Bark!" ,
      h3: "Doggie Adoption App",
    },
    {
      item: "bark",
      open: "bark",
      image: "" ,
      div: "Bark!" ,
      h3: "Doggie Adoption App",
    },
]


const portfolioGrid = document.querySelector(".portfolioTiles")

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
    portfolioGrid.appendChild(tiles)   
}


const eachCard = document.querySelector(".portfolioPopups"); console.log(eachCard);

const serviceCards = [
  {
    id: "bark",
    h3: "",
    image: "",
    description: `<p><strong></strong></p>
   <p></p>
   <p></p> 
   `,
  },
  {
   id: "nancys",
   h3: "Pet Care App",
   image: "Photos/Screen Shot 2023-01-30 at 6.51.36 AM.png",
   description: `<p><strong></strong></p>
  <p></p>
  <p></p> 
  `,
 },
 {
   id: "emoji",
   h3: "",
   image: "",
   description: `<p><strong></strong></p>
  <p></p>
  <p></p> 
  `,
 },
 {
   id: "",
   h3: "",
   image: "",
   description: `<p><strong></strong></p>
  <p></p>
  <p></p> 
  `,
 },
 {
   id: "",
   h3: "",
   image: "",
   description: `<p><strong></strong></p>
  <p></p>
  <p></p> 
  `,
 },
  {
    id: "",
    h3: "",
    image: "",
    description: `<p><strong></strong></p>
   <p></p>
   <p></p> 
   `,
  },
  {
   id: "",
   h3: "HELLO",
   image: "",
   description: `<p><strong></strong></p>
  <p></p>
  <p></p> 
  `,
 },
];

const createCards = () => {
  const cards = serviceCards
  .map(({ id, h3, image, description }) => (
      `
      <div id="${id}" class="modal" data-animation="slideInOutTop">
      <div class="modal-dialog">
       <header class="modal-header">
          <h3>${h3}</h3>
          <i class="fas fa-times" data-service></i>
       </header>
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
  )).join('');
  eachCard.innerHTML = cards;
};



createCards();
