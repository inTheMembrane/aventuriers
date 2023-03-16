import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export class ClaimedCity extends Model {}

ClaimedCity.init(
    {
    },
    {
        sequelize: sequelize,
        tableName: "claimed_city",
        underscored: true,
    }
);
