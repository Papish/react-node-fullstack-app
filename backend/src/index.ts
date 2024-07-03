import express from "express";
import { db } from "./db/prisma";

// setup dot env for app
const APP_PORT = 3000;

const app = express();

app.get("/", async (req, res) => {
  const allUsers = await db.user.findMany();

  res.json({
    data: allUsers,
  });
});

app.listen(APP_PORT, () => {
  console.log("Server running at: http://localhost:%d", APP_PORT);
});
