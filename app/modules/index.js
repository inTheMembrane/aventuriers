import City from ('./City');
import Colour from ('./Colour');
import Deck from ('./Deck');
import Game from ('./Game');
import Mission from ('./Mission');
import Player from ('./Player');
import Route from ('./Route');
import Type from ('./Type');
import User from ('./User');

class HasMany {
    // exemple with Game and City
    constructor(ClassHasMany, ClassBelongsTo) {
        ClassHasMany.hasMany(ClassBelongsTo, { // Game.hasMany(City {
            foreignKey: `${ClassHasMany.toLowerCase()}_id`, // "game_id"
            as: `${ClassHasMany.toLowerCase()}_${ClassBelongsTo.toLowerCase()}` // "game_city"
        });
        ClassBelongsTo.belongsTo(ClassHasMany, {
            foreignKey:`${ClassHasMany.toLowerCase()}_id`,
            as: `${ClassHasMany.toLowerCase()}_${ClassBelongsTo.toLowerCase()}`
        });

        }
    }

// SAVES, 11 city, 0N game
Game.hasMany(City, {
    foreignKey: "game_id",
    as: "game_city"
});
City.belongsTo(Game, {
    foreignKey:"game_id",
    as: "game_city"
});

// OWNS, 01 city, 0N player
// SAVES, 11 deck, 0N game
// HOSTS, 11 game, 0N user
// IDENTIFIES, 11 mission, 0N type
// TRIES, 01 mission, 0N player
// COMPLETES, 01 mission, 0N player
// STARTS, 11 mission, 0N city
// ENDS, 11 mission, 0N city
// SAVES, 11 mission, 0N game
// COLOURS, 11 player, 0N colour
// PLAYS, 11 player, 0N game
// IDENTIFIES, 11 route, 0N type
// COLOURS, 11 route, 0N colour
// STARTS, 11 route, 0N city
// ENDS, 11 route, 0N city
// OWNS, 01 route, 0N player
// SAVES, 11 route, 0N game


// HOLDS, 01 deck, 11 player

export default {City, Colour, Deck, Game, Mission, Player, Route, Type, User}