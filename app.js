// ==> VARIABLES
const choices = ['✊', '🤚', '✌️'];
  
const player1 = document.getElementById('player-1');
const player2 = document.getElementById('player-2');

const resultArea = document.getElementById('result-area');
const playBtn = document.getElementById('play-btn');
// ==> END VARIABLES

// ==> LES FONCTIONS

// fonction qui génère aléatoirement un choix
const generateChoices = ()=> {
    // sort soit 0, 1 ou 2 
    // soit la pierre, la feuille ou le ciseau
    let r = Math.floor(Math.random() * 3 )
    return choices(r)
}

// ==> Event Listeners
// sur mon btn playBtn que j'ai récupérer par ma variable
// j'écoute un évènement au click, je lance la fonction "play"
playBtn.addEventListener('click', play)