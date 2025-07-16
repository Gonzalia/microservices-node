import axios from "axios";
import { Router } from "express";
const router = Router();

const MOVIES_SERVICE_URL = "http://localhost:3002"; // In a real application, this should be an environment variable

router.post("/", async (req, res) => {
  try {
    const token = req.headers.authorization;
    const response = await axios.post(
      `${MOVIES_SERVICE_URL}/movies`,
      req.body,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error("Error in gateway:", error.response?.data || error.message);
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { error: "Internal server error" });
  }
});

export default router;
