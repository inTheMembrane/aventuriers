import { Card } from './Card.js';
import {City} from './City.js';
import { ClaimedCity } from './ClaimedCity.js';
import { ClaimedMission } from './ClaimedMission.js';
import { ClaimedRoute } from './ClaimedRoute.js';
import {Color} from './Color.js';
import {Deck} from './Deck.js';
import {Game} from './Game.js';
import {Mission} from './Mission.js';
import {Player} from './Player.js';
import {Route} from './Route.js';
import {Type} from './Type.js';
import {User} from './User.js';

function createHasManyBelongsToAssociation( // One-To-Many = 0N:11
    ClassHasMany,
    ClassBelongsTo,
    alias = `${ClassBelongsTo.name.toLowerCase()}${ClassHasMany.name}` // camelCase
) {
    // example with Game and City
    ClassHasMany.hasMany(ClassBelongsTo, {
        // Game.hasMany(City {
        foreignKey: `${ClassHasMany.name.toLowerCase()}_id`, // "game_id"
        as: alias, // "cityGame"
    });
    ClassBelongsTo.belongsTo(ClassHasMany, {
        foreignKey: `${ClassHasMany.name.toLowerCase()}_id`,
        as: alias,
    });
}
function createHasOneBelongsToAssociation( // One-To-One = 01:01
    ClassHasOne,
    ClassBelongsTo,
    alias = `${ClassBelongsTo.name.toLowerCase()}${ClassHasOne.name}`
) {
    // example with Game and City
    ClassHasOne.hasOne(ClassBelongsTo, {
        // Game.hasOne(City {
        foreignKey: `${ClassHasOne.name.toLowerCase()}_id`, // "game_id"
        as: alias, // "cityGame"
    });
    ClassBelongsTo.belongsTo(ClassHasOne, {
        foreignKey: `${ClassHasOne.name.toLowerCase()}_id`,
        as: alias,
    });
}
function createBelongsToManyAssociation( // Many-To-Many = 0N:0N
    Class1,
    Class2,
    through_table,
    alias1 = `${Class1.name.toLowerCase()}_${Class2.name.toLowerCase()}`,
    alias2 = `${Class2.name.toLowerCase()}_${Class1.name.toLowerCase()}`
) {
    // example with Game and City
    Class1.belongsToMany(Class2, {
        // Game.belongsToMany(City {
        as: alias1, // "city_game"
        through: through_table, // "through_table"
        foreignKey: `${Class1.name.toLowerCase()}_id`, // "game_id"
        otherKey: `${Class2.name.toLowerCase()}_id`, // "city_id"
    });
    Class2.belongsToMany(Class1, {
        // City.belongsToMany(Game {
        as: alias2, // "game_city"
        through: through_table, // "through_table"
        foreignKey: `${Class2.name.toLowerCase()}_id`, // "city_id"
        otherKey: `${Class1.name.toLowerCase()}_id`, // "game_id"
    });
}

// city 0N:0N game
createBelongsToManyAssociation(Game, City, "claimed_city")
// claimed_city 11:0N player
createHasManyBelongsToAssociation(Player, ClaimedCity, "cityOwner")

// route 0N:0N game
createBelongsToManyAssociation(Game, Route, "claimed_route")
// claimed_route 11:0N player
createHasManyBelongsToAssociation(Player, ClaimedRoute, "routeOwner")

// mission 0N:0N game
createBelongsToManyAssociation(Game, Mission, "claimed_mission")
// claimed_mission 11:0N player
createHasManyBelongsToAssociation(Player, ClaimedMission, "missionOwner")

// deck 11:0N game
createHasManyBelongsToAssociation(Game, Deck)
// deck 11:0N type
createHasManyBelongsToAssociation(Type, Deck)

// card 11:0N deck
createHasManyBelongsToAssociation(Deck, Card)
// card 11:0N color
createHasManyBelongsToAssociation(Color, Card)

// game 11:0N user
createHasManyBelongsToAssociation(User, Game, "host")
// game 01:01 player
createHasOneBelongsToAssociation(Player, Game, "isTurn")

// STARTS, mission 11:0N city
createHasManyBelongsToAssociation(City, Mission, "startCity")
// ENDS, mission 11:0N city // need to do it manually because different foreign key
City.hasMany(Mission, {
    foreignKey: "city_id_1",
    as: "endCity"
});
Mission.belongsTo(City, {
    foreignKey: "city_id_1",
    as: "endCity"
});

// player 11:0N color
createHasManyBelongsToAssociation(Color, Player)
// deck 01:11 player
createHasOneBelongsToAssociation(Deck, Player, "hand")
// player 11:0N game
createHasManyBelongsToAssociation(Game, Player)

// route 11:0N type
createHasManyBelongsToAssociation(Type, Route)
// route 11:0N color
createHasManyBelongsToAssociation(Color, Route)
// STARTS, route 11:0N city
createHasManyBelongsToAssociation(City, Route, "startCity")
// ENDS, 11 route 11:0N city // need to do it manually because different foreign key
City.hasMany(Route, {
    foreignKey: "city_id_1",
    as: "endCity"
});
Route.belongsTo(City, {
    foreignKey: "city_id_1",
    as: "endCity"
});

export {City, Color, Deck, Game, Mission, Player, Route, Type, User}