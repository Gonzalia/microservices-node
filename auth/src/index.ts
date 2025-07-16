import express from "express";
import authRoutes from "./routes/auth.routes";

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
