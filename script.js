let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = []; //array ordered a list of cards
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");




// object player
let player = {
  name: "Vlad ",
  chips: 10
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": € " + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startgame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  messageEl.style.cssText = 'color:white;font-size:1.5rem';

  rendergame();
}

function rendergame() {
  cardsEl.textContent = "Cards: ";
  // Loop to render all cards
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  //Logic of the Game, comparasion
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    messageEl.textContent = "Do you want a new card?";
 
  } else if (sum === 21) {
    messageEl.textContent = "BlackJack! You win!";
    messageEl.style.cssText = 'color:green;font-size:2.5rem';
    hasBlackJack = true;
   
    player.chips = player.chips + 1;
    playerEl.textContent = player.name + ": € " + player.chips;
  
  
  } else {
    messageEl.textContent = "You lose !";
    messageEl.style.cssText = 'color:red;font-size:2.5rem';
    isAlive = false;
    player.chips = player.chips - 1;
    
    playerEl.textContent = player.name + ": € " + player.chips;
   
  }
}

function newcard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    //push the card to the Array
    cards.push(card);

    rendergame();
  }
}

