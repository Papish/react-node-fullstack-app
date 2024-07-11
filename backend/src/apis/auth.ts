import express from "express";
import bcrypt from "bcrypt";
import { z } from "zod";
import { db } from "../db/prisma";

const authRouter = express.Router();

const registerUserSchema = z.object({
  email: z.string().email("Email is not wrong"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

const loginUserSchema = z.object({
  email: z.string().email("Email is not wrong"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

authRouter.post("/register", async (req, res) => {
  const validationResult = registerUserSchema.safeParse(req.body);

  if (!validationResult.success) {
    const errors = validationResult.error.errors.map((e) => ({
      [e.path[0]]: e.message,
    }));
    return res.status(400).json(errors);
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

  await db.user.create({
    data: {
      email: req.body.email,
      passwordHash: hashedPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    },
  });

  return res.status(201).json({
    message: "user registered",
  });
});

authRouter.post("/signin", async (req, res) => {
  const validationResult = loginUserSchema.safeParse(req.body);

  if (!validationResult.success) {
    const errors = validationResult.error.errors.map((e) => ({
      [e.path[0]]: e.message,
    }));
    return res.status(400).json(errors);
  }

  const user = await db.user.findFirst({
    where: {
      email: req.body.email,
    },
  });

  if (!user) {
    return res.status(401).json({
      message: "user not registered",
    });
  }

  const isCredValid = await bcrypt.compare(
    req.body.password,
    user.passwordHash
  );

  if (!isCredValid) {
    return res.status(401).json({
      message: "Invalid email and password.",
    });
  }

  return res.status(200).json({
    message: "logged in",
  });
});

export default authRouter;
