import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("clients", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: 0,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    profissao: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
});