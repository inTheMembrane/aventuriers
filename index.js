import express from "express";
import router from "./app/routers/router.js";
import expressSession from "express-session";
// require('dotenv').config()

const PORT = process.env.PORT || 3000;
const app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");

// on passe par le middleware de gestion des session utilisateurs
app.use(
  expressSession({
    resave: true,
    saveUninitialized: true,
    secret: "Guess it!",
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, // ça fait une heure
    },
  })
);

app.use(express.static("public"));

// routage !
app.use(router);


let message = "";
if (process.env.MODE === "prod") {
  message = "Le serveur est lancé sur http://monsupernomdedomaine.fr";
} else {
  //Sinon, c'est qu'on est en local en train de coder
  message = `Le serveur est lancé sur localhost au port ${PORT}`;
}

// on lance le serveur
app.listen(PORT, () => console.log(message));
