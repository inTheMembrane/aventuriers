import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export class ClaimedMission extends Model {}

ClaimedMission.init(
    {
    },
    {
        sequelize: sequelize,
        tableName: "claimed_mission",
        underscored: true,
    }
);
