import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class User extends Model{};

User.init({
  name: { type: DataTypes.TEXT, allowNull: false}, 
  email: { type: DataTypes.TEXT, allowNull: false}, 
  password: { type: DataTypes.TEXT, allowNull: false}, 
},{
  sequelize: sequelize,
  tableName: "user"

})

export default User;