import { MongoClient } from "mongodb";
import { config } from "dotenv";

config("../../.env");
let database;

const DBConnection = async () => {
  try {
    const client = await MongoClient.connect(process.env.DB_CONNECTION);
    database = client.db("todo");
  } catch (error) {
    console.error(error);
  }
};

export { DBConnection, database };
