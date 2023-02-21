-- à injecter dans la database "aventurier";

BEGIN;

-- INSERT INTO "answer" ("id", "description", "question_id") VALUES
INSERT INTO "colour" ("id", "name") VALUES


INSERT INTO "length" ("id", "size") VALUES


INSERT INTO "type" ("id", "name") VALUES


INSERT INTO "city" ("id", "name") VALUES
(1,'Amsterdam'),
(2,'Angora'),
(3,'Athína'),
(4,'Barcelona'),
(5,'Berlin'),
(6,'Brest'),
(7,'Brindisi'),
(8,'Bruxelles'),
(9,'Bucuresti'),
(10,'Budapest'),
(11,'Cádiz'),
(12,'Constantinople'),
(13,'Danzig'),
(14,'Dieppe'),
(15,'Edinburgh'),
(16,'Erzurum'),
(17,'Essen'),
(18,'Frankfurt'),
(19,'Kharkov'),
(20,'København'),
(21,'Kyïv'),
(22,'Lisboa'),
(23,'London'),
(24,'Madrid'),
(25,'Marseille'),
(26,'Moskva'),
(27,'München'),
(28,'Palermo'),
(29,'Pamplona'),
(30,'Paris'),
(31,'Petrograd'),
(32,'Riga'),
(33,'Roma'),
(34,'Rostov'),
(35,'Sarajevo'),
(36,'Sevastopol'),
(37,'Smolensk'),
(38,'Smyrna'),
(39,'Sochi'),
(40,'Sofia'),
(41,'Stockholm'),
(42,'Venezia'),
(43,'Warszawa'),
(44,'Wien'),
(45,'Wilno'),
(46,'Zágráb'),
(47,'Zürich');

INSERT INTO "route" ("id", "name", "type_id", "length_id" ,"colour_id", "city_id", "city_id_1") VALUES


INSERT INTO "deck" ("id", "name", "blue", "red", "green", "yellow", "black", "orange", "white", "pink", "engine") VALUES


INSERT INTO "mission" ("id", "name", "points", "city_id", "city_id_1") VALUES


COMMIT;