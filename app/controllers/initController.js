// Game initialisation controller

import {City, Colour, Deck, Game, Mission, Player, Route, Type, User} from '../modules'

const indexController = {
    pageHome: (req, res) => {
        res.render('index');
    },
    pagePlayer: (req, res) => {
        res.render('index');
    },

    
}

export default indexController;