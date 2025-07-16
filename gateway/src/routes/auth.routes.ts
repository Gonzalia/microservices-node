import axios from "axios";
import { Router } from "express";

const router = Router();

const AUTH_SERVICE_URL = "http://localhost:3001";

router.post("/register", async (req, res) => {
  try {
    const response = await axios.post(
      `${AUTH_SERVICE_URL}/auth/register`,
      req.body
    );
    res.status(201).json(response.data);
  } catch (error: any) {
    console.error("Error en gateway:", error?.response?.data || error.message);

    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const response = await axios.post(
      `${AUTH_SERVICE_URL}/auth/login`,
      req.body
    );
    res.status(200).json(response.data);
  } catch (error: any) {
    console.error("Error en gateway:", error?.response?.data || error.message);

    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
