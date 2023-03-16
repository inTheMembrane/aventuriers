/*######################################################"
test
########################################################*/

// const propriete = prompt("Player id")
// const valeur = prompt("player name")
// const players = {};
// players[propriete] = (valeur)
// console.log(players)

/*######################################################"
test
########################################################*/

// const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
// const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');
// // prend 'ABC...' => split('') => ['A','B','C',...]
// const lookup = input.reduce((m, k, i) => Object.assign(m, {
//   [k]: output[i]
// }), {}); 
// // 1 // prend ['A','B','C',...] => reduce => pour chaque item applique fctX() et les "accumules" dans {}, en gros pour le deuxieme
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 
// // ! 2 // là ça se complique // fctX() : (m, k, i) => Object.assign(m, {[k]: output[i]}) Copie depuis un objet source vers un objet target. 
// // ! Donc copie {[k]: output[i]} vers m ... vu le resultat de // 3 //, ça devrait donner {'A':'N'}, mais comment ça marche avec pour seul attribut 'A' donné par le reduce ?
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// // 3 // renvoie {'A': 'N', 'B': 'O', 'C': 'P', ... }

// module.exports = (str) => {
//   return str.split('').map(x => lookup[x] || x).join('');
// } 
// // prend "ab&c" =>split=>['a','b,','&','c'] => map donc pour chaque lettre donne correspondance dans lookup 'a'='n' ou si pas de correspondance sa propre valeur '&'='&' => ['n','o','&','p'] => .join => "no&p"

// // console.log(lookup);

/*######################################################"
test
########################################################*/

// const test = (a,b,c) => {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(test("a"))
// console.log(typeof test("a"))


/*######################################################"
test
########################################################*/

// 'use strict';

// var aiScores = [];
// var iAverage;

// function add(a, b) {
//     return a + b;
// }

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.setPrompt('Enter exam score > ');
// rl.prompt();

// rl.on('line', (line) => {
//   console.log(line);
//   if (Number.isInteger(parseFloat(line))) {
//       aiScores.push(parseFloat(line));
//       console.log(aiScores);
//       console.log(parseFloat(line));
//       iAverage = (aiScores.reduce(add, 0)/aiScores.length);
//       console.log('Current average = ' + iAverage);
//   } else {
//       switch(line.trim()) {
//         case 'hello':
//           console.log('world!');
//         case 'close':
//           rl.close();
//           break;
//         default:
//           console.log(`Say what? I might have heard '${line.trim()}'`);
//           break;
//       }
//   }
//   rl.prompt();
// }).on('close', () => {
//   console.log('Have a great day!');
//   process.exit(0);
// });

/*######################################################"
test
########################################################*/


//   const removeValue = (array, value) => {
//     const index = array.indexOf(value);
//     console.log(value)
//     console.log(index)
//     const x = array.splice(index, 1);
//     console.log(`Array values: ${array}`);
//     console.log(`Removed variable value: ${x}`);
//     return x;
//   }

//   const myArray = ["red","blue","green","black","yellow"]
// const color = "blue"
//   removeValue(myArray,color)

/*######################################################"
test
########################################################*/

    // const varToString = (varObj) => Object.keys(varObj)[0];

  // const propriete = prompt("Player id")
  // const valeur = prompt("player name")
  // const players = {};
  // players[propriete] = (valeur)
  // console.log(players)

  //   const someVar = 42;
  //   const displayName = varToString({ someVar });
  //   console.log(displayName);
  //   console.log(someVar);
  //   console.log(typeof displayName);


/*######################################################"
test
########################################################*/

  // let maVar = "foo"
  // let text = `text de test qui appelle une variable foo : ${maVar}`
  // console.log(text)
  // maVar = "bar"
  // console.log(text)