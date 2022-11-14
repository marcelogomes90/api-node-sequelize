import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("clients", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
    }
}, { initialAutoIncrement: 1, }
);