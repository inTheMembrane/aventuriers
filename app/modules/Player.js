import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export class Player extends Model {}

Player.init(
    {
        name: { type: DataTypes.TEXT, allowNull: false },
        availableTrains: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        availableStations: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        points: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        visitedCountries: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        playOrder: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    },
    {
        sequelize: sequelize,
        tableName: "player",
        underscored: true,
    }
);
