/*=========================================================================================================================
* Traductions
=========================================================================================================================*/
const englishText = {
  colors: {
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
  },

  setup: {
    qCount: "How many players are playing ? (1 to 5) ",
    qName: "What is your name ? ",
    // Utilisation d'une fonction car sinon le ${playerColors} est appelé avant d'avoir été défini
    qColor: () => {
      return `What color do you wish to play ? (Available : ${Param.playerColors})`;
    },
    qCountries: `How many european countries have you visited ? `,
  },
};
export default englishText;
