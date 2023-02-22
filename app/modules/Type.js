import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';

class Type extends Model{};

Type.init({
  name: { type: DataTypes.TEXT, allowNull: false}, 
},{
  sequelize: sequelize,
  tableName: "type"

})

export default Type;