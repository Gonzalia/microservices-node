import express from "express";
import authRoutes from "./routes/auth.routes";
import moviesRoutes from "./routes/movies.routes";

const app = express();
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/movies", moviesRoutes);

app.listen(3000, () => console.log("Gateway is running on port 3000"));
