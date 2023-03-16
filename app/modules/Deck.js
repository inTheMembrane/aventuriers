import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export class Deck extends Model {}

Deck.init(
    {
    },
    {
        sequelize: sequelize,
        tableName: "deck",
        underscored: true,
    }
);
