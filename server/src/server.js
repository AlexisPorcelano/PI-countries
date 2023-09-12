const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { conn } = require("./db");
const router = require("./routes");
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use("/api", router);

module.exports = server;
