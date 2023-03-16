// Game initialisation controller

import {
    City,
    Color,
    Deck,
    Game,
    Mission,
    Player,
    Route,
    Type,
    User,
    Card,
    ClaimedCity,
    ClaimedMission,
    ClaimedRoute,
} from "../modules";

export const indexController = {
    pageHome: (req, res) => {
        res.render("index");
    },
    pagePlayer: (req, res) => {
        res.render("index");
    },
};

