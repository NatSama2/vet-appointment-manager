import { Router } from "express";
import { listarMascotas } from "../controllers/mascotas.controller.js";

const router = Router();

/**
 * @swagger
 * /mascotas:
 *   get:
 *     tags:
 *       - Mascotas
 *     summary: Obtener todas las mascotas
 *     responses:
 *       200:
 *         description: Lista de mascotas
 */
router.get("/", listarMascotas);

export default router;
