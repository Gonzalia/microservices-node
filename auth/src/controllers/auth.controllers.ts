import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    const alreadyExists = await prisma.user.findUnique({
      where: { email },
    });

    if (alreadyExists) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    const token = jwt.sign({ userId: user.id }, "SUPER_SECRET_KEY", {
      expiresIn: "1h",
    });

    res.json({ id: user.id, email: user.email, token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      res.status(400).json({ error: "Email and password are required" });

    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    const token = jwt.sign({ userId: user.id }, "SUPER_SECRET_KEY", {
      expiresIn: "1h",
    });
    res.json({ id: user.id, email: user.email, token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
