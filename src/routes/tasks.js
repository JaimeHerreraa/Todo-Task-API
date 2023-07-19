import express from "express";
import { database } from "../db/database.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let collection = await database.collection("task");
    let results = await collection.find({}).limit(50).toArray();
    if (!results) {
      res.status(404).send("Records Not Found");
    }
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send("Couldn't Create New Record, Something Went Wrong");
  }
});

router.post("/", async (req, res) => {
  try {
    let collection = await database.collection("task");
    const task = req.body;
    if (!task) {
      res.status(400).send("Couldn't Create New Record, Invalid Request Body");
    }
    await collection.insertOne(task);
    res.status(204).send("Record Created Successfully");
  } catch (error) {
    res.status(500).send("Couldn't Create New Record, Something Went Wrong");
  }
});

export default router;
