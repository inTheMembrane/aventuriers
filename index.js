// Import outside modules
import express from "express";
import session from "express-session"
import dotenv from "dotenv"
dotenv.config()

// Import project modules
import router from "./app/router.js";

// Setup express engine
const PORT = process.env.PORT || 3000;
const app = express();
// app.set("view engine", "ejs");
// app.set("views", "./app/views");

// Setup encoding to allow POST 
app.use(express.urlencoded({ extended: true }));

// Setup sessions with cookies to allow game-state to be maintained
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "Guess it!",
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 30, // One month
    },
  })
);

// Designate static directory
app.use(express.static("assets"));

// Designate router
app.use(router);

// Server start console messages
let message = "";
if (process.env.MODE === "prod") {
  message = "Listening on http://myURL.com";
} else {
  //Sinon, c'est qu'on est en local en train de coder
  message = `Listening on http://localhost:${PORT}`;
}

// on lance le serveur
app.listen(PORT, () => console.log(message));
