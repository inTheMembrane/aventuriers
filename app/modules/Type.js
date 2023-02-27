import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export class Type extends Model {}

Type.init(
    {
        name: { type: DataTypes.TEXT, allowNull: false },
    },
    {
        sequelize: sequelize,
        tableName: "type",
    }
);
