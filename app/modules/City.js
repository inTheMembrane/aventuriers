import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export class City extends Model {}

City.init(
    {
        name: { type: DataTypes.TEXT, allowNull: false },
    },
    {
        sequelize: sequelize,
        tableName: "city",
        underscored: true,
    }
);
