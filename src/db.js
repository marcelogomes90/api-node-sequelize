import { Sequelize } from "sequelize";
import dotenv from "dotenv/config.js";

const dbName = process.env.MYSQLDATABASE;
const dbUser = process.env.MYSQLUSER;
const dbHost = process.env.MYSQLHOST;
const dbPassword = process.env.MYSQLPASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: "mysql",
    host: '127.0.0.1',
});

export default sequelize;