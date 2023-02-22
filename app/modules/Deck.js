import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';

class Deck extends Model{};

Deck.init({
  name: { type: DataTypes.TEXT, allowNull: false}, 
  blue: { type: DataTypes.INTEGER, allowNull: false}, 
  red: { type: DataTypes.INTEGER, allowNull: false}, 
  green: { type: DataTypes.INTEGER, allowNull: false}, 
  yellow: { type: DataTypes.INTEGER, allowNull: false}, 
  black: { type: DataTypes.INTEGER, allowNull: false}, 
  orange: { type: DataTypes.INTEGER, allowNull: false}, 
  white: { type: DataTypes.INTEGER, allowNull: false}, 
  pink: { type: DataTypes.INTEGER, allowNull: false}, 
  engine: { type: DataTypes.INTEGER, allowNull: false}, 
},{
  sequelize: sequelize,
  tableName: "colour"
})

export default Deck;