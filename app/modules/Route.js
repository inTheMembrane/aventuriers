import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export class Route extends Model {}

Route.init(
    {
        name: { type: DataTypes.TEXT },
        length: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
        sequelize: sequelize,
        tableName: "route",
    }
);
