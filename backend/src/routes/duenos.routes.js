import { Router } from "express";
import { listarDuenos } from "../controllers/duenos.controller.js"; 

const router = Router();

/**
 * @swagger
 * /duenos:
 *   get:
 *     tags:
 *       - Dueños
 *     summary: Obtener todos los dueños
 *     responses:
 *       200:
 *         description: Lista de dueños
 */
router.get("/", listarDuenos);

export default router;