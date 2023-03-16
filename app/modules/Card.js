import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export class Card extends Model {}

Card.init(
    {
        position: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    },
    {
        sequelize: sequelize,
        tableName: "card",
        underscored: true,
    }
);
