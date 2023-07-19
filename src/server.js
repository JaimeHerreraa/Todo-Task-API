const express = require("express");
const db = require("./database");

const app = express();
const port = 4000;

db.DBConnection().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});

module.exports = { app };
