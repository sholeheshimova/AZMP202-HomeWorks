const cardsContainer = document.querySelector('.cards-container');
const apiUrl = "http://localhost:3000/cards";  


const loadCards = async () => {
  try {
    const response = await fetch(apiUrl);
    const cards = await response.json();  
    cardsContainer.innerHTML = "";  

    
    cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.className = "card";
      cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.title}">
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <button onclick="viewCard(${card.id})" class="details-btn">Details</button>
        <button onclick="deleteCard(${card.id})" class="delete-btn">Delete</button>
      `;

      
      const detailsBtn = cardElement.querySelector('.details-btn');
      detailsBtn.style.backgroundColor = 'yellow';
      detailsBtn.style.color = 'black';
      detailsBtn.style.border = 'none';
      detailsBtn.style.padding = '10px 20px';
      detailsBtn.style.fontSize = '16px';
      detailsBtn.style.cursor = 'pointer';
      detailsBtn.style.borderRadius = '5px';
      detailsBtn.style.transition = 'background-color 0.3s';

      
      const deleteBtn = cardElement.querySelector('.delete-btn');
      deleteBtn.style.backgroundColor = 'red';
      deleteBtn.style.color = 'white';
      deleteBtn.style.border = 'none';
      deleteBtn.style.padding = '10px 20px';
      deleteBtn.style.fontSize = '16px';
      deleteBtn.style.cursor = 'pointer';
      deleteBtn.style.borderRadius = '5px';
      deleteBtn.style.transition = 'background-color 0.3s';

     
      detailsBtn.addEventListener('mouseenter', () => {
        detailsBtn.style.backgroundColor = 'gold';  
      });
      detailsBtn.addEventListener('mouseleave', () => {
        detailsBtn.style.backgroundColor = 'yellow';  
      });

      deleteBtn.addEventListener('mouseenter', () => {
        deleteBtn.style.backgroundColor = 'darkred';  
      });
      deleteBtn.addEventListener('mouseleave', () => {
        deleteBtn.style.backgroundColor = 'red';  
      });

      cardsContainer.appendChild(cardElement); 
    });
  } catch (error) {
    console.error("Error fetching cards:", error);
  }
};


loadCards();



const cards = [
  { id: 1, title: "Beautiful Rose", description: "A fresh rose bouquet.", image: "./assets/image/flower11.jpg" },
  { id: 2, title: "Sunny Sunflower", description: "Brighten your day with sunflowers.", image: "./assets/image/flower21.jpg" },
  { id: 3, title: "Elegant Lily", description: "Graceful white lilies for any occasion.", image: "./assets/image/flower31.jpg" }
];


const displayCards = () => {
  cardsContainer.innerHTML = ""; 
  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.innerHTML = `
      <img src="${card.image}" alt="${card.title}">
      <h3>${card.title}</h3>
      <p>${card.description}</p>
      <button onclick="viewCard(${card.id})">Details</button>
    `;
    cardsContainer.appendChild(cardElement);
  });
};


const viewCard = (id) => {
  const selectedCard = cards.find((card) => card.id === id);
  if (selectedCard) {
    localStorage.setItem("selectedCard", JSON.stringify(selectedCard)); 
    window.location.href = "details.html"; 
  }
};


displayCards();



const deleteCard = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      alert(`Card with ID: ${id} deleted.`);
      loadCards(); 
    } else {
      alert('Failed to delete the card');
    }
  } catch (error) {
    console.error("Error deleting card:", error);
  }
};
