import { Sequelize } from "sequelize";
import dotenv from "dotenv/config.js"

const dbName = process.env.MYSQLDATABASE; // passar os dados do .env para as constantes
const dbUser = process.env.MYSQLUSER;
const dbHost = process.env.MYSQLHOST;
const dbPassword = process.env.MYSQLPASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: "mysql",
    host: dbHost
});

export default sequelize;