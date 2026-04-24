import { Router } from "express";
import {
  crearCita,
  listarCitas,
  actualizarEstado,
} from "../controllers/citas.controller.js";

const router = Router();

router.get("/", listarCitas);
router.post("/", crearCita);
router.put("/:id", actualizarEstado);

export default router;
