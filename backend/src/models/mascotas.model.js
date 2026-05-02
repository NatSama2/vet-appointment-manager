import { pool } from "../config/db.js";

// 🟦 Listar mascotas
export const listarMascotasDB = async () => {
  const [rows] = await pool.query(`
    SELECT
      m.id,
      m.nombre AS mascota,
      m.especie,
      m.edad
    FROM mascotas m
    ORDER BY m.id
  `);

  return rows;
};
