import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class City extends Model{};

City.init({
  name: { type: DataTypes.TEXT, allowNull: false}, 
},{
  sequelize: sequelize,
  tableName: "city"

})

export default City;