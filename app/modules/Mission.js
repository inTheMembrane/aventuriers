import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export class Mission extends Model {}

Mission.init(
    {
        name: { type: DataTypes.TEXT },
        mainMission: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
        },
        points: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
        sequelize: sequelize,
        tableName: "mission",
        underscored: true,
    }
);
