const express = require("express");
const ctrl = require("./controller");
const massive = require("massive");
require("dotenv").config();

const app = express();

app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("connected to db");
});

app.get("/api/houses", ctrl.getHouses);
app.post("/api/houses", ctrl.addHouse);
app.delete("/api/houses", ctrl.deleteHouse);

app.listen(SERVER_PORT || 4000, () =>
  console.log(`server listening on port ${SERVER_PORT}`)
);
