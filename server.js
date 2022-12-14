import express from "express";
import routes from "./routes.js";
import db from "./src/db.js";

const app = express();

app.use(express.json());
app.use(routes);

db.sync(() => console.log(`Banco de dados conectado: ${process.env.MYSQLDATABASE}`));

app.listen(process.env.MYSQLPORT || 3000, () => console.log("Servidor iniciado"));