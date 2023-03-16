import express from "express";

// on importe nos controllers
import {controller} from "./controllers/mainController.js";

export const router = express.Router()

// La route front, qui renvoie le fichier index.html
// router.get('/', (req, res) => {
//     let filePath = path.join(__dirname, '../index.html');
//     res.sendFile( filePath );
//   });

// page d'accueil
router.get('/', controller.pageHome)

// page player
router.get('/player/:id', controller.pagePlayer)
