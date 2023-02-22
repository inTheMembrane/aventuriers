import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';

class Mission extends Model{};

Mission.init({
  name: { type: DataTypes.TEXT}, 
  points: { type: DataTypes.INTEGER, allowNull: false}, 
  completed: { type: DataTypes.BOOLEAN, allowNull: false}
},{
  sequelize: sequelize,
  tableName: "mission"

})

export default Mission;