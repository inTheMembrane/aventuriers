/*=========================================================================================================================
* Imports
=========================================================================================================================*/
// const readline = require("readline");
import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*=========================================================================================================================
* Traductions
=========================================================================================================================*/
const colors = {
  blue: "blue",
  red: "red",
  green: "green",
  yellow: "yellow",
  black: "black",
  orange: "orange",
  white: "white",
  pink: "pink",
  engine: "engine",
  any: "any",
};

const setUpGame = {
  questionNumPlayers: "How many players are playing ? (1 to 5) ",
  questionName: "What is your name ? ",
  // Utilisation d'une fonction car sinon le ${playerColors} est appelé avant d'avoir été défini
  questionColor: () => {
    return `What color do you wish to play ? (Available : ${playerColors})`;
  },
  questionCountries: `How many european countries have you visited ? `,
};
/*=========================================================================================================================
* Game parameters
=========================================================================================================================*/
const playerColors = [
  colors.blue,
  colors.red,
  colors.green,
  colors.yellow,
  colors.black,
];

const initialCards = {
  blue: 12,
  red: 12,
  green: 12,
  yellow: 12,
  black: 12,
  orange: 12,
  white: 12,
  pink: 12,
  engine: 14,
};
const startCards = 3;

const startWagon = 42;

const startStation = 3;

/*=========================================================================================================================
* Routes
=========================================================================================================================*/
const routes = {
  types: ["normal", "tunnel", { ferry: 0 }, "double"],
  lengths: [1, 2, 3, 4, 6, 8],
  AB: {
    color: "orange",
    length: 3,
    type: "normal",
    owner: "",
  },
  BC: {
    color: "any",
    length: 2,
    type: { ferry: 1 },
    owner: "",
  },
  AD: {
    color: "green",
    length: 4,
    type: "normal",
    owner: "",
  },
  DC: {
    color: "any",
    length: 2,
    type: "normal",
    owner: "",
  },
  CE: {
    color: "blue",
    length: 3,
    type: "tunnel",
    owner: "",
  },
  BE: {
    color: ["red", "white"],
    length: 2,
    type: "double",
    owner: ["", ""],
  },
};
/*=========================================================================================================================
* Cards
=========================================================================================================================*/

const cards = {
  deckHidden: [],
  deckVisible: {},
  cemetery: {},
  tunnel: {},
  init: () => {
    // temp, used to test with 1 player
    players.push({
      color: "",
      name: "",
      hand: {},
      trains: startWagon,
      stations: startStation,
      points: 0,
      countries: 0,
    });
    console.log("players.push done :", players[0].hand);
    cards.createDeck(); // on se retrouve avec un deckHidden mélangé
  },
  createDeck: () => {
    // TODO remplacer avec les nvlles fcts + integrer le parametrage des autres decks (tunnel/visible/cemetery/...)
    // On prépare le jeu en créant un deck temporaire avec toutes les cartes décrites dans colors
    const deckTemp = [];
    for (const key in initialCards) {
      for (let i = 0; i < initialCards[key]; i++) {
        deckTemp.push(colors[key]);
      }
    }
    // On les mélange dans le deckHidden
    cards.shuffleCards(deckTemp);
    console.log("cards : done");
    cards.setUpHands();
  },
  // Reshuffle all cards => objectToArray()
  shuffle: (initialObject, targetArray) => {
    // Create tempArray with keys x values from object
    const tempArray = [];
    for (const key in initialObject) {
      for (let i = 0; i < initialObject[key]; i++) {
        tempArray.push(colors[key]);
      }
    }
    // To loop as many time as there are values in temporary array
    const length = tempArray.length;
    // Pick randomly in tempArray and push in targetArray
    for (i = 0; i < length; i++) {
      const r = cards.getRandomInt(deck);
      const card = tempArray[r];
      tempArray.splice(r, 1);
      targetArray.push(card);
    }
  },
  // Transfer one card from one object to another => objectToObject()
  transfer: (color, initialObject, targetObject) => {
    initialObject[color]--;
    targetObject[color]++;
  },
  // Pick top card in Array and add to Object => arrayToObject()
  draw: (targetObject) => {
    const card = cards.deckHidden.pop();
    targetObject[card]++;
  },
  setUpHands: () => {
    // creates empty hands for players and deals them 3 cards
    for (const player of players) {
      const resetHand = JSON.parse(JSON.stringify(initialCards));
      for (const color in resetHand) {
        resetHand[color] = 0;
      }
      player.hand = resetHand;
    }
    for (let i = 0; i < startCards; i++) {
      for (const player of players) {
        cards.draw(player.hand);
      }
    }
  },

  pickVisible: (player, color, cost) => {
    // TODO
  },
  pay: (player, color, cost) => {
    // TODO
  },
  tryTunnel: () => {
    // TODO
  },
  recycleCemetery: () => {
    // TODO
  },
  recycleVisible: () => {
    // TODO
  },
  shuffleCards: (deck) => {
    // Randomly picks cards into array and puts them into deckHidden
    const length = deck.length; // To loop as many time as there are cards
    for (let i = 0; i < length; i++) {
      const r = cards.getRandomInt(deck);
      const card = deck[r];
      deck.splice(r, 1);
      cards.deckHidden.push(card);
    }
  },
  getRandomInt: (deck) => {
    // random number int max = taille du deck à mélanger
    const min = Math.ceil(0);
    const max = Math.floor(deck.length);
    return Math.floor(Math.random() * (max - min) + min);
  },
};

/*=========================================================================================================================
* Game
=========================================================================================================================*/

const players = [];
//? use ?Object.assign https://sentry.io/answers/remove-specific-item-from-array/#:~:setUpGame=If%20you%20want%20to%20remove,the%20tools%20for%20the%20job.


const game = {
  playerNum: 0,
  currentPlayer: 0, // Not yet playing
  playerQuestionLimit: 0,
  init: () => {
    cards.init();
    game.playGame();
  },

  playGame: () => {
    // TODO la suite du jeu
    console.log(setUpGame.questionNumPlayers);
    let i = 0;
    rl.on("line", (input) => {
      i++;
      console.log("i : ", i);
      switch (true) {
        case i === 1:
          game.createPlayers(input);
          break;
        case i % 3 === 2 && i <= game.playerQuestionLimit:
          game.chooseName(input);
          break;
        case i % 3 === 0 && i <= game.playerQuestionLimit:
          game.chooseColor(input);
          break;
        case i % 3 === 1 && i <= game.playerQuestionLimit:
          game.visitedCountries(input, i);
          break;
        default:
          console.log("rien de prévu");
      }
    });
  },

  createPlayers: (numPlayers) => {
    // TODO réagir à un mauvais input et reinitialiser counter
    game.playerNum = numPlayers;
    game.playerQuestionLimit = game.playerNum * 3 + 1;
    for (let j = 0; j < numPlayers; j++) {
      players.push({
        color: "",
        name: "",
        hand: {},
        trains: startWagon,
        stations: startStation,
        points: 0,
        countries: 0,
      });
    }
    game.startQuestions();
  },
  startQuestions: () => {
    console.log(`--- Player ${game.currentPlayer + 1} ---`);
    console.log(setUpGame.questionName);
  },
  chooseName: (playerName) => {
    players[game.currentPlayer].name = playerName;
    console.log(setUpGame.questionColor());
  },
  chooseColor: (playerColor) => {
    game.removeValue(playerColors, playerColor);
    players[game.currentPlayer].color = playerColor;
    console.log(setUpGame.questionCountries);
  },
  visitedCountries: (numCountries, lineCount) => {
    players[game.currentPlayer].countries = numCountries;
    if (lineCount < game.playerQuestionLimit) {
      game.currentPlayer++;
      game.startQuestions();
    } else {
      console.log(players);
      cards.setUpGame();
    }
  },
  playOrder: () => {}, //TODO order by number of countries
  /**
   * Function used to remove a specific value from an array
   * @param {*} array The target array
   * @param {*} value The target value
   * @returns The same array without the target value
   */
  removeValue: (array, value) => {
    const index = array.indexOf(value);
    const x = array.splice(index, 1);
    return x;
  },
};

game.init();
