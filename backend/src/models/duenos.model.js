import { pool } from "../config/db.js";

// Listar dueños
export const listarDuenosDB = async () => {
    const [rows] = await pool.query(`
        SELECT
            d.id,
            d.nombre AS dueno,
            d.telefono
        FROM duenos d
        ORDER BY d.id
    `)
    return rows;
}