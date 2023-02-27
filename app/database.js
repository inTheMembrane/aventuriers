import { Sequelize } from 'sequelize';
import dotenv from "dotenv"
dotenv.config()

export const sequelize = new Sequelize({
  database : process.env.PG_DB,
  port : process.env.PG_PORT,
  username: process.env.PG_USER, 
  password : process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  dialect: 'postgres',
  define: {
        updatedAt: 'updated_at',
        createdAt: 'created_at'
      }
});