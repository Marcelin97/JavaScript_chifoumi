// ==> VARIABLES
const choices = ["✊", "🤚", "✌️"];

const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");

const resultText = document.getElementById("result");
const playBtn = document.getElementById("play-btn");
// ==> END VARIABLES

// ==> LES FONCTIONS
const generateChoices = () => {
  // paper, rock or scissors
  let r = Math.floor(Math.random() * 3);
  // return the choices of the table regarding the index
  return choices[r];
};

// insert in my HTML
// call in my play function line 51
const insertHTML = (choice1, choice2, result) => {
  player1.innerHTML = choice1;
  player2.innerHTML = choice2;
  resultText.innerHTML = result;
};

// who is winner
const decideWinner = (a, b) => {
  if (
    (a === "✊" && b === "✊") ||
    (a === "🤚" && b === "🤚") ||
    (a === "✌️" && b === "✌️")
  ) {
    return "Égalité!";
  } else if (
    (a === "✊" && b === "✌️") ||
    (a === "🤚" && b === "✊") ||
    (a === "✌️" && b === "🤚")
  ) {
    return "JOUEUR 1 GAGNE!";
  } else {
    return "JOUEUR 2 GAGNE!";
  }
};

const play = () => {
  let choice1 = generateChoices();
  let choice2 = generateChoices();

  let result = decideWinner(choice1, choice2);
  insertHTML(choice1, choice2, result);
};

// ==> Event Listeners
// listen "click" on my btn play and start play function
playBtn.addEventListener("click", play);
