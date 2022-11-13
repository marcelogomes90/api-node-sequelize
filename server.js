import express from "express";
import routes from "./routes.js";
import db from "./src/db.js";

const app = express();

app.use(express.json());
app.use(routes); 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(process.env.PORT || 3000, () => console.log("Servidor iniciado"));