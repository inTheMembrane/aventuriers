import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Player extends Model{};

Player.init({
  name: { type: DataTypes.TEXT, allowNull: false}, 
  available_trains: { type: DataTypes.INTEGER, allowNull: false},
  available_stations: { type: DataTypes.INTEGER, allowNull: false},
  points: { type: DataTypes.INTEGER, allowNull: false},
  visited_countries: { type: DataTypes.INTEGER, allowNull: false},
},{
  sequelize: sequelize,
  tableName: "player"

})

export default Player;