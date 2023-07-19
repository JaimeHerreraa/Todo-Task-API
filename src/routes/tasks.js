import express from "express";
import { ObjectId } from "mongodb";
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
    console.error(error);
    res.status(500).send("Couldn't Found Records Something Went Wrong");
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
    res.status(200).send("Record Created Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Couldn't Create New Record, Something Went Wrong");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let collection = await database.collection("task");
    const query = { _id: new ObjectId(req.params.id) };
    await collection.deleteOne(query);
    res.status(200).send("Record Deleted Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Couldn't Delete Record, Something Went Wrong");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let collection = await database.collection("task");
    const query = { _id: new ObjectId(req.params.id) };
    const update = { $set: req.body };
    await collection.updateOne(query, update);
    res.status(200).send("Record Updated Successfully");
  } catch (error) {
    res.status(500).send("Couldn't Update Record, Something Went Wrong");
  }
});

export default router;
