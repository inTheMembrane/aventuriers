-- à injecter dans la database "aventurier";

BEGIN;

-- INSERT INTO "answer" ("id", "description", "question_id") VALUES
INSERT INTO "color" ("id", "name") VALUES
(1,'blue'),
(2,'red'),
(3,'green'),
(4,'yellow'),
(5,'black'),
(6,'orange'),
(7,'white'),
(8,'pink'),
(9,'engine'),
(10,'any');

INSERT INTO "type" ("id", "name") VALUES
(1,'normal'),
(2,'tunnel'),
(3,'ferry_1'),
(4,'ferry_2'),
(6,'hidden'),
(7,'visible'),
(8,'player_hand'),
(9,'discard');

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

INSERT INTO "route" ("id", "type_id", "length" ,"color_id", "city_id", "city_id_1") VALUES
(1,1,3,8,22,24),
(2,1,3,6,11,24),
(3,2,3,5,24,29),
(4,2,3,7,24,29),
(5,1,2,4,4,24),
(6,2,2,10,4,29),
(7,1,4,10,4,25),
(8,1,4,2,25,29),
(9,1,4,1,29,30),
(10,1,4,3,29,30),
(11,1,4,8,6,29),
(12,1,2,1,11,22),
(13,1,4,10,25,30),
(14,2,3,10,30,47),
(15,2,2,4,27,47),
(16,2,2,3,42,47),
(17,2,2,8,25,47),
(18,2,2,1,27,42),
(19,2,4,10,25,33),
(20,1,2,5,33,42),
(21,1,2,10,42,46),
(22,1,2,7,7,33),
(23,3,4,10,28,33),
(24,3,3,10,7,28),
(25,3,4,10,3,7),
(26,4,6,10,28,38),
(27,1,3,5,6,30),
(28,1,2,6,6,14),
(29,3,2,10,14,23),
(30,3,2,10,14,23),
(31,1,2,3,8,14),
(32,1,1,8,14,30),
(33,1,4,5,15,23),
(34,1,4,6,15,23),
(35,4,2,10,1,23),
(36,1,1,5,1,8),
(37,1,2,2,8,30),
(38,1,2,4,8,30),
(39,1,2,1,8,18),
(40,1,3,7,18,30),
(41,1,3,6,18,30),
(42,1,3,2,5,18),
(43,1,3,5,5,18),
(44,1,2,7,1,18),
(45,1,2,3,17,18),
(46,1,2,8,18,27),
(47,1,3,4,1,17),
(48,3,3,10,17,20),
(49,3,3,10,17,20),
(50,1,2,1,5,17),
(51,1,4,10,5,13),
(52,1,4,8,5,43),
(53,1,4,4,5,43),
(54,1,3,3,5,44),
(55,1,4,1,43,44),
(56,1,1,2,10,44),
(57,1,1,7,10,44),
(58,1,2,10,44,46),
(59,1,3,6,27,44),
(60,1,2,6,10,46),
(61,1,3,2,35,46),
(62,2,6,10,10,21),
(63,2,4,10,9,10),
(64,1,3,8,10,35),
(65,1,4,10,21,43),
(66,1,2,10,21,45),
(67,1,3,2,21,37),
(68,1,4,10,19,21),
(69,1,4,10,9,21),
(70,1,4,3,3,35),
(71,1,3,8,3,40),
(72,3,2,10,3,38),
(73,2,2,10,12,38),
(74,2,3,6,2,38),
(75,2,2,10,35,40),
(76,2,2,10,9,40),
(77,1,3,1,12,40),
(78,1,3,4,9,12),
(79,4,4,10,12,36),
(80,2,2,10,2,12),
(81,1,3,5,2,16),
(82,4,4,10,16,36),
(83,2,3,2,16,39),
(84,1,4,7,9,36),
(85,1,4,10,34,36),
(86,3,2,10,36,39),
(87,1,2,10,34,39),
(88,1,2,3,19,34),
(89,1,4,10,19,26),
(90,1,2,6,26,37),
(91,1,4,7,26,31),
(92,1,4,1,31,45),
(93,1,4,10,31,32),
(94,2,8,10,31,41),
(95,1,3,4,37,45),
(96,1,3,2,43,45),
(97,1,4,3,32,45),
(98,1,3,5,13,32),
(99,1,2,10,13,43),
(100,1,3,4,20,41),
(101,1,3,7,20,41);

INSERT INTO "mission" ("id", "main_mission", "points", "city_id", "city_id_1") VALUES
(1,FALSE,12,1,45),
(2,FALSE,7,1,29),
(3,FALSE,10,2,19),
(4,FALSE,5,3,2),
(5,FALSE,11,3,45),
(6,FALSE,8,4,27),
(7,FALSE,8,4,8),
(8,FALSE,12,5,26),
(9,FALSE,8,5,9),
(10,FALSE,9,5,33),
(11,FALSE,8,6,42),
(12,TRUE,20,6,31),
(13,FALSE,7,6,25),
(14,FALSE,9,8,13),
(15,FALSE,5,10,40),
(16,TRUE,21,11,41),
(17,FALSE,5,15,34),
(18,TRUE,21,15,3),
(19,FALSE,7,15,30),
(20,FALSE,10,17,21),
(21,FALSE,5,18,20),
(22,FALSE,13,18,37),
(23,TRUE,21,20,16),
(24,FALSE,6,21,31),
(25,FALSE,8,21,39),
(26,TRUE,20,22,13),
(27,FALSE,10,23,44),
(28,FALSE,7,23,5),
(29,FALSE,8,24,14),
(30,FALSE,8,24,47),
(31,FALSE,8,25,17),
(32,FALSE,8,28,12),
(33,TRUE,20,28,26),
(34,FALSE,7,30,46),
(35,FALSE,8,30,44),
(36,FALSE,10,32,9),
(37,FALSE,8,33,38),
(38,FALSE,8,35,36),
(39,FALSE,8,37,34),
(40,FALSE,5,40,38),
(41,FALSE,11,41,44),
(42,FALSE,10,42,12),
(43,FALSE,6,43,37),
(44,FALSE,6,46,7),
(45,FALSE,6,47,10),
(46,FALSE,6,47,7);

COMMIT;

-- With Postgres, using IDENTITY BY DEFAULT instead of ALWAYS allows to add values with their id,but the increment is not updated implicitly
-- We need to update it with its latest value
BEGIN;

SELECT setval('city_id_seq', (SELECT MAX(id) from "city"));
SELECT setval('color_id_seq', (SELECT MAX(id) from "color"));
SELECT setval('mission_id_seq', (SELECT MAX(id) from "mission"));
SELECT setval('route_id_seq', (SELECT MAX(id) from "route"));
SELECT setval('type_id_seq', (SELECT MAX(id) from "type"));

COMMIT;
