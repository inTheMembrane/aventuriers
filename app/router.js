import express from "express";
import path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// // on importe nos controllers
// // import {controller} from "./controllers/mainController.js";
const router = express.Router()

// // La route front, qui renvoie le fichier index.html
router.get('/', (req, res) => {
    // console.log(__dirname)

    let filePath = path.join(__dirname, '../assets/index.html');
    res.sendFile( filePath );
  });

// // page d'accueil
// // router.get('/', controller.pageHome)

// // page player
// // router.get('/player/:id', controller.pagePlayer)

export default router