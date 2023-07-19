import express from "express";
import cors from "cors";
import { json } from "express";
import { DBConnection } from "./db/database.js";
import tasks from "./routes/tasks.js";

const app = express();
const port = 4000;

app.use(json());
app.use(cors());
app.use("/tasks", tasks);

DBConnection().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});

export default app;
