import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();
export const createMovie = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, rating } = req.body;

    const userId = req.userId;

    if (!userId) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    if (isNaN(rating) || rating < 1 || rating > 5) {
      res
        .status(400)
        .json({ error: "La puntuación debe ser un número entre 1 y 5" });
    }

    const movie = await prisma.movie.create({
      data: {
        title,
        rating,
        userId,
      },
    });

    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
