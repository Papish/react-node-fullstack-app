import express from "express";
import authRouter from "./apis/auth";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth/user", authRouter);

app.listen(3000, () => {
  console.log("Server running at: http://localhost:3000");
});
