import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Colour extends Model{};

Colour.init({
  name: { type: DataTypes.TEXT, allowNull: false}, 
},{
  sequelize: sequelize,
  tableName: "colour"

})

export default Colour;