import express from "express";

// on importe nos controllers
import controller from "../controllers/indexController.js";

const router = express.Router()

// page d'accueil
router.get('/', controller.pageHome)

// page player
router.get('/player/:id', controller.pagePlayer)

// on exporte le router 
export default router