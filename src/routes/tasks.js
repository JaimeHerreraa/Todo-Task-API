import express from "express";
import { database } from "../db/database.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let collection = await database.collection("task");
    let results = await collection.find({}).limit(50).toArray();
    res.send(results).status(200);
  } catch (error) {
    res.send("Records Not Found").status(404);
  }
});

export default router;
