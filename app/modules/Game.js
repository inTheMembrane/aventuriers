import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';

class Game extends Model{};

Game.init({
  name: { type: DataTypes.TEXT, allowNull: false}, 
  deck_hidden: { type: DataTypes.TEXT}, 
},{
  sequelize: sequelize,
  tableName: "game"

})

export default Game;