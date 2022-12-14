import { Sequelize } from "sequelize";
import dotenv from "dotenv/config.js"

const dbName = process.env.DB_NAME; // passar os dados do .env para as constantes
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT;

const sequelize = new Sequelize(dbName, dbUser, dbHost, dbPassword, dbPort, {
    dialect: "mysql",
});

export default sequelize;