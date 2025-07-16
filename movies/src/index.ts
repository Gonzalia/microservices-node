import express from "express";
import moviesRoutes from "./routes/movies.routes";

const app = express();
app.use(express.json());
app.use("/movies", moviesRoutes);

app.listen(3002, () => console.log("Gateway is running on port 3002"));
