import express from "express";

// on importe nos controllers
import {controller} from "./controllers/mainController.js";

export const router = express.Router()

// page d'accueil
router.get('/', controller.pageHome)

// page player
router.get('/player/:id', controller.pagePlayer)
