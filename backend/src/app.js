import express from "express";
import cors from "cors";
import citasRoutes from "./routes/citas.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/citas", citasRoutes);

export default app;
