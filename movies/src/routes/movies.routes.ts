import { Router } from "express";
import { createMovie } from "../controllers/movies.controller";
import { verifyToken } from "../middlewares/authMiddleware";

const router = Router();

router.post("/", verifyToken, createMovie);

export default router;
