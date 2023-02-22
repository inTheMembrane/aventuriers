import City from './City.js';
import Colour from './Colour.js';
import Deck from './Deck.js';
import Game from './Game.js';
import Mission from './Mission.js';
import Player from './Player.js';
import Route from './Route.js';
import Type from './Type.js';
import User from './User.js';

function createHasManyBelongsToAssociation(ClassHasMany, ClassBelongsTo, alias = `${ClassBelongsTo.name.toLowerCase()}_${ClassHasMany.name.toLowerCase()}`) { // example with Game and City
        ClassHasMany.hasMany(ClassBelongsTo, { // Game.hasMany(City {
        foreignKey: `${ClassHasMany.name.toLowerCase()}_id`, // "game_id"
        as: alias // "city_game"
    }),
    ClassBelongsTo.belongsTo(ClassHasMany, {
        foreignKey:`${ClassHasMany.name.toLowerCase()}_id`,
        as: alias
    })
}

// SAVES, 11 city, 0N game
createHasManyBelongsToAssociation(Game, City)
// OWNS, 01 city, 0N player
createHasManyBelongsToAssociation(Player, City, "city_owner")
// SAVES, 11 deck, 0N game
createHasManyBelongsToAssociation(Game, Deck)
// HOSTS, 11 game, 0N user
createHasManyBelongsToAssociation(User, Game, "host")
// IDENTIFIES, 11 mission, 0N type
createHasManyBelongsToAssociation(Type, Mission)
// TRIES, 01 mission, 0N player
createHasManyBelongsToAssociation(Player, Mission)
// STARTS, 11 mission, 0N city
createHasManyBelongsToAssociation(City, Mission)
// ENDS, 11 mission, 0N city // need to do it manually because different foreign key
City.hasMany(Mission, {
    foreignKey: "city_id_1",
    as: "mission_city_1"
});
Mission.belongsTo(City, {
    foreignKey: "city_id_1",
    as: "mission_city_1"
});
// SAVES, 11 mission, 0N game
createHasManyBelongsToAssociation(Game, Mission)
// COLOURS, 11 player, 0N colour
createHasManyBelongsToAssociation(Colour, Player)
// PLAYS, 11 player, 0N game
createHasManyBelongsToAssociation(Game, Player)
// IDENTIFIES, 11 route, 0N type
createHasManyBelongsToAssociation(Type, Route)
// COLOURS, 11 route, 0N colour
createHasManyBelongsToAssociation(Colour, Route)
// STARTS, 11 route, 0N city
createHasManyBelongsToAssociation(City, Route)
// ENDS, 11 route, 0N city // need to do it manually because different foreign key
City.hasMany(Route, {
    foreignKey: "city_id_1",
    as: "route_city_1"
});
Route.belongsTo(City, {
    foreignKey: "city_id_1",
    as: "route_city_1"
});
// OWNS, 01 route, 0N player
createHasManyBelongsToAssociation(Player, Route)
// SAVES, 11 route, 0N game
createHasManyBelongsToAssociation(Game, Route)

// HOLDS, 01 deck, 11 player
Player.hasOne(Deck, {
    foreignKey: "deck_id",
    as: "player_deck"
});
Deck.belongsTo(Player, {
    foreignKey: "deck_id",
    as: "player_deck"
});

export default {City, Colour, Deck, Game, Mission, Player, Route, Type, User}