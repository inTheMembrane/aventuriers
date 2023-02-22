HOSTS, 0N user, 11 game
HASDECK, 0N game, 01 deck
PLAYS, 1N game, 11 player
COMPLETES, 0N player, 01 mission
HOLDS, 11 player, 01 deck
TRIES, 0N player, 01 mission
COLOURS, 0N colour, 01 player
OWNS2, 01 city, 0N player
ENDS2, 11 mission, 0N city

user: user_id, name, email, password
game: game_id, name, hidden_deck, save_date
deck: deck_id, name, blue, red, green, yellow, black, orange, white, pink, engine
player: player_id, name, available_trains, available_stations, points, visited_countries


mission: mission_id, name, points
ISPART2, 11 mission, 0N game
colour: colour_id, name
OWNS, 01 route, 0N player
STARTS, 1N city, 11 route
city: city_id, name
ISPART, 11 city, 0N game
STARTS2, 11 mission, 0N city
COLOURS2, 0N colour, 11 route
route: route_id, name
ISPART3, 11 route, 0N game
ENDS, 1N city, 11 route
type: type_id, name
ISTYPE, 0N type, 11 mission
ISTYPE2, 0N type, 11 route