import { Sequelize } from "sequelize";
import { config } from "dotenv";
config();

const db = new Sequelize(process.env.DATABASE_NAME ,process.env.DATABASE_USERNAME , process.env.DATABASE_PASSWORD,{
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DRIVER
});

export default db;