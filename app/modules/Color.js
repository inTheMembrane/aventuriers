import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export class Color extends Model {}

Color.init(
    {
        name: { type: DataTypes.TEXT, allowNull: false },
    },
    {
        sequelize: sequelize,
        tableName: "color",
    }
);

export default Color;
