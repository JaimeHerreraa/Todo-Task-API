const mongoDB = require("mongodb").MongoClient;
require("dotenv").config({ path: "../.env" });

let database;

const DBConnection = async () => {
  try {
    const client = await mongoDB.connect(process.env.DB_CONNECTION);
    database = client.db("Todo");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { DBConnection, database };
