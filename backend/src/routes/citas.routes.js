import { Router } from "express";
import {
  crearCita,
  listarCitas,
  actualizarEstado,
} from "../controllers/citas.controller.js";

const router = Router();

/**
 * @swagger
 * /citas:
 *   get:
 *     summary: Obtener todas las citas
 *     responses:
 *       200:
 *         description: Lista de citas
 */
router.get("/", listarCitas);

/**
 * @swagger
 * /citas:
 *   post:
 *     summary: Crear una nueva cita
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             mascota: Firulais
 *             especie: Perro
 *             edad: 3
 *             dueno: Juan Perez
 *             telefono: 123456789
 *             fecha: 2026-04-25
 *             hora: "10:00:00"
 *     responses:
 *       201:
 *         description: Cita creada correctamente
 *       400:
 *         description: Error en los datos
 */
router.post("/", crearCita);

/**
 * @swagger
 * /citas/{id}:
 *   put:
 *     summary: Marcar cita como atendida
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cita actualizada
 *       400:
 *         description: ID inválido
 */
router.put("/:id", actualizarEstado);

export default router;
