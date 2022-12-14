import { Sequelize } from "sequelize";

const DBNAME = process.env.MYSQLDATABASE;
const DBUSER = process.env.MYSQLUSER;
const DBHOST = process.env.MYSQLHOST;
const DBPASSWORD = process.env.MYSQLPASSWORD;
const DBPORT = process.env.MYSQLPORT;

const sequelize = new Sequelize(DBNAME, DBUSER, DBHOST, DBPORT, DBPASSWORD, {
    dialect: "mysql"
});

export default sequelize;