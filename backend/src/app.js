import express from "express";
import cors from "cors";
import citasRoutes from "./routes/citas.routes.js";
import duenosRoutes from "./routes/duenos.routes.js";
import mascotasRoutes from "./routes/mascotas.routes.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/citas", citasRoutes);
app.use("/duenos", duenosRoutes);
app.use("/mascotas", mascotasRoutes);

export default app;
