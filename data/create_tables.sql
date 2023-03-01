-- CREATE DATABASE "aventurier";

BEGIN;
-- Creates a transaction group of SQL commands, if any fails, whole transaction is invalidated

DROP TABLE IF EXISTS "city",
"color",
"deck",
"game",
"mission",
"player",
"route",
"type",
"user",
"game_saves_city",
"game_saves_route",
"game_saves_mission",
"user_has_role";

CREATE TABLE IF NOT EXISTS "game_saves_city" ( -- link to game table : SAVES, 11 city, 0N game
"id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
"game_id" integer NOT NULL,
"city_id" integer NOT NULL,
"player_id" integer NOT NULL, -- link to player table : OWNS, 01 city, 0N player
 "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);
CREATE TABLE IF NOT EXISTS "game_saves_route"(-- link to game table : SAVES, 11 route, 0N game
"id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
"game_id" integer NOT NULL,
"route_id" integer NOT NULL,
"player_id" integer NOT NULL, -- link to player table : OWNS, 01 route, 0N player
 "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);
CREATE TABLE IF NOT EXISTS "game_saves_mission"( -- link to game table : SAVES, 11 mission, 0N game
"id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
"completed" boolean NOT NULL DEFAULT FALSE,
"game_id" integer NOT NULL,
"mission_id" integer NOT NULL,
"player_id" integer NOT NULL,-- link to player table : TRIES, 01 mission, 0N player
 "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);


CREATE TABLE IF NOT EXISTS "city" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, -- primary key is automatically NOT NULL
  "name" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

CREATE TABLE IF NOT EXISTS "color" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

CREATE TABLE IF NOT EXISTS "deck" ( -- each deck line belongs to a single game
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "type_id" integer NOT NULL, -- deck 11:0N type
  "blue" integer NOT NULL,
  "red" integer NOT NULL,
  "green" integer NOT NULL,
  "yellow" integer NOT NULL,
  "black" integer NOT NULL,
  "orange" integer NOT NULL,
  "white" integer NOT NULL,
  "pink" integer NOT NULL,
  "engine" integer NOT NULL,
  "game_id" integer NOT NULL, -- deck 11:0N game
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

-- -- ! Removed in current version, is it worth it to individual cards ? 
-- -- here decks are just a type table
-- CREATE TABLE IF NOT EXISTS "deck" (
--   "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
--   "name" text NOT NULL,
--   "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   "updated_at" timestamptz
-- );

-- CREATE TABLE IF NOT EXISTS "game_saves_deck"(-- link to game table : deck 0N:0N game
--   "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
--   "game_id" integer NOT NULL,
--   "deck_id" integer NOT NULL,
--   "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   "updated_at" timestamptz
-- );

-- CREATE TABLE IF NOT EXISTS "card" (
--   "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
--   "name" text NOT NULL,
--   "color_id" integer NOT NULL, -- card 11:0N color
--   "deck_id" integer NOT NULL, -- card 11:0N deck
--   "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   "updated_at" timestamptz
-- );


CREATE TABLE IF NOT EXISTS "game" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "user_id" integer NOT NULL, -- link to user table : HOSTS, 11 game, 0N user
  "deck_hidden" text, -- when saved hidden_deck is stored as string
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

CREATE TABLE IF NOT EXISTS "mission" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" text,
  "points" integer NOT NULL,
  "type_id" integer NOT NULL, -- link to type table : IDENTIFIES, 11 mission, 0N type
  "city_id" integer NOT NULL, -- link to city table : STARTS, 11 mission, 0N city
  "city_id_1" integer NOT NULL, -- link to city table : ENDS, 11 mission, 0N city
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

CREATE TABLE IF NOT EXISTS "player" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "color_id" integer NOT NULL, -- link to color table : colorS, 11 player, 0N color
  "available_trains" integer NOT NULL,
  "available_stations" integer NOT NULL,
  "points" integer NOT NULL,
  "visited_countries" integer NOT NULL,
  "deck_id" integer, -- link to deck table : HOLDS, 01 deck, 11 player
  "game_id" integer NOT NULL, -- link to game table : PLAYS, 11 player, 0N game
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

CREATE TABLE IF NOT EXISTS "route" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" text,
  "type_id" integer NOT NULL, -- link to type table : IDENTIFIES, 11 route, 0N type
  "length" integer NOT NULL,
  "color_id" integer NOT NULL, -- link to color table : colorS, 11 route, 0N color
  "city_id" integer NOT NULL, -- link to city table : STARTS, 11 route, 0N city
  "city_id_1" integer NOT NULL, -- link to city table : ENDS, 11 route, 0N city
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

CREATE TABLE IF NOT EXISTS "type" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

CREATE TABLE IF NOT EXISTS "user" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "email" text NOT NULL,
  "password" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

CREATE TABLE IF NOT EXISTS "role" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

CREATE TABLE IF NOT EXISTS "user_has_role" ( -- 0N user HAS 0N role
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "user_id" integer NOT NULL,
  "role_id" integer NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);



ALTER TABLE "game" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id"); -- user HOSTS game
ALTER TABLE "mission" ADD FOREIGN KEY ("city_id_1") REFERENCES "city" ("id"); -- mission STARTS city
ALTER TABLE "mission" ADD FOREIGN KEY ("city_id") REFERENCES "city" ("id"); -- mission ENDS city
ALTER TABLE "mission" ADD FOREIGN KEY ("type_id") REFERENCES "type" ("id"); -- type IDENTIFIES mission 
ALTER TABLE "player" ADD FOREIGN KEY ("color_id") REFERENCES "color" ("id"); -- player colorS
ALTER TABLE "player" ADD FOREIGN KEY ("game_id") REFERENCES "game" ("id"); -- player PLAYS game
ALTER TABLE "player" ADD FOREIGN KEY ("deck_id") REFERENCES "deck" ("id"); -- player HOLDS deck
ALTER TABLE "route" ADD FOREIGN KEY ("type_id") REFERENCES "type" ("id"); -- type IDENTIFIES route
ALTER TABLE "route" ADD FOREIGN KEY ("color_id") REFERENCES "color" ("id"); -- route colorS
ALTER TABLE "route" ADD FOREIGN KEY ("city_id_1") REFERENCES "city" ("id"); -- route STARTS city
ALTER TABLE "route" ADD FOREIGN KEY ("city_id") REFERENCES "city" ("id"); -- route ENDS city
ALTER TABLE "deck" ADD FOREIGN KEY ("game_id") REFERENCES "game" ("id"); --  deck ISFROM game
ALTER TABLE "deck" ADD FOREIGN KEY ("type_id") REFERENCES "type" ("id"); --  deck HAS type
ALTER TABLE "game_saves_city" ADD FOREIGN KEY ("game_id") REFERENCES "game" ("id"); -- game SAVES city
ALTER TABLE "game_saves_city" ADD FOREIGN KEY ("city_id") REFERENCES "city" ("id"); -- game SAVES city
ALTER TABLE "game_saves_city" ADD FOREIGN KEY ("player_id") REFERENCES "player" ("id"); -- player OWNS city
ALTER TABLE "game_saves_mission" ADD FOREIGN KEY ("game_id") REFERENCES "game" ("id"); -- game SAVES mission
ALTER TABLE "game_saves_mission" ADD FOREIGN KEY ("mission_id") REFERENCES "mission" ("id"); -- game SAVES mission
ALTER TABLE "game_saves_mission" ADD FOREIGN KEY ("player_id") REFERENCES "player" ("id"); -- player TRIES mission
ALTER TABLE "game_saves_route" ADD FOREIGN KEY ("game_id") REFERENCES "game" ("id"); -- game SAVES route
ALTER TABLE "game_saves_route" ADD FOREIGN KEY ("route_id") REFERENCES "route" ("id"); -- game SAVES route
ALTER TABLE "game_saves_route" ADD FOREIGN KEY ("player_id") REFERENCES "player" ("id"); -- player OWNS route
ALTER TABLE "user_has_role" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id"); -- role HAS user
ALTER TABLE "user_has_role" ADD FOREIGN KEY ("role_id") REFERENCES "role" ("id"); -- user HAS role

-- Pour mettre fin à au bloc de transaction et l'exécuter
COMMIT;