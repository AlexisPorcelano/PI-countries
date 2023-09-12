require("dotenv").config({ path: "./api/.env" });
const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');

conn.sync({ alter: true }).then(() => {
  server.listen(3000, () => {
    console.log(`Servidor en ejecución en el puerto 3000`);
  });;
}).catch(error => console.error(error))
