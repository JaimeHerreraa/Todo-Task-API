import express from "express";
import { DBConnection } from "./db/database.js";
import tasks from "./routes/tasks.js";

const app = express();
const port = 4000;

app.use("/tasks", tasks);

DBConnection().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});

export default app;
