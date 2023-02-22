import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Route extends Model{};

Route.init({
  name: { type: DataTypes.TEXT}, 
  length: { type: DataTypes.INTEGER, allowNull: false}, 
},{
  sequelize: sequelize,
  tableName: "route"

})

export default Route;