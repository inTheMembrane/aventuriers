import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export class Game extends Model {}

Game.init(
    {
        name: { type: DataTypes.TEXT, allowNull: false },
        over: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
        turn: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    },
    {
        sequelize: sequelize,
        tableName: "game",
        underscored: true,
    }
);
