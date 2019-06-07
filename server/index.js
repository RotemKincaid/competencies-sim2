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

app.use(express.static(`${__dirname}/../build`));

app.get("/api/houses", ctrl.getHouses);
app.post("/api/houses", ctrl.addHouse);
app.delete("/api/houses/:id", ctrl.deleteHouse);
app.put("/api/houses/:id", ctrl.editHouse);

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(SERVER_PORT || 4000, () =>
  console.log(`server listening on port ${SERVER_PORT}`)
);
