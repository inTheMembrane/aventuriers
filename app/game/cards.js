// cards.js == > rappatrié sur game.js
console.log("on")

const cards = {
    colors: {
      blue: 12,
      orange: 12,
      red: 12,
      white: 12,
      black: 12,
      yellow: 12,
      pink: 12,
      green: 12,
      engine: 14
    },
    deckHidden: [],
    deckVisible: [],
    cemetery: [],
    tunnel: [],
    init: () => {
      cards.createDeck(); // on se retrouve avec un deckHidden mélangé
    },
    createDeck: () => {
      // on prépare le jeu en créant un deck temporaire avec toutes les cartes décrites dans colors
      const deckTemp = [];
      for (const key in cards.colors) {
        // Object.keys(cards.colors).forEach(() => {})
        // alternate way to do it array.forEach() fonctionne sur array, donc il faut convertir en array avec Object.values() ou Object.keys()
        for (let i = 0; i < cards.colors[key]; i++) {
          deckTemp.push(key);
        }
      }
      cards.shuffleCards(deckTemp); // fonction shuffle
    },
    setUpGame: () => {
      // TODO distibuer 3 cartes par joueurs et 5 cartes visibles
    },
    pickHidden: () => {
      // TODO
    },
    pickVisible: () => {
      // TODO
    },
    pay: (player, cost) => {
      // TODO -- vu que unsorted, potentiellemet bien de faire un objet avec compteurs ou alors de array.sort('color') => pop()
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
      // shuffles back into deckHidden
      // prend les cartes au pif dans l'array du deck de depart et ensuite les range dans le deckHidden
      const length = deck.length; // pour faire la boucle le bon nombre de fois
      for (i = 0; i < length; i++) {
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

  module.exports = cards
