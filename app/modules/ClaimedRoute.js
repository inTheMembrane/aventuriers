import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export class ClaimedRoute extends Model {}

ClaimedRoute.init(
    {
    },
    {
        sequelize: sequelize,
        tableName: "claimed_route",
        underscored: true,
    }
);
