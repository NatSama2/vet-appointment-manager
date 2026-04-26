import { pool } from "../config/db.js";

// 🟩 Crear cita
export const crearCitaDB = async (data) => {
  const {
    mascota,
    especie,
    edad,
    dueno,
    telefono,
    fecha,
    hora,
    motivo = null,
  } = data;

  const conn = await pool.getConnection();

  try {
    await conn.beginTransaction();

    const [duenoRes] = await conn.query(
      "INSERT INTO duenos (nombre, telefono) VALUES (?, ?)",
      [dueno, telefono],
    );

    const [mascotaRes] = await conn.query(
      "INSERT INTO mascotas (nombre, especie, edad) VALUES (?, ?, ?)",
      [mascota, especie, edad],
    );

    await conn.query(
      `INSERT INTO citas (mascota_id, dueno_id, fecha, hora, estado, motivo)
       VALUES (?, ?, ?, ?, 'pendiente', ?)`,
      [mascotaRes.insertId, duenoRes.insertId, fecha, hora, motivo],
    );

    await conn.commit();
  } catch (error) {
    await conn.rollback();
    throw error;
  } finally {
    conn.release();
  }
};

// 🟦 Listar citas
export const listarCitasDB = async () => {
  const [rows] = await pool.query(`
    SELECT 
      c.id,
      m.nombre AS mascota,
      d.nombre AS dueno,
      c.fecha,
      c.hora,
      c.estado,
      c.motivo
    FROM citas c
    JOIN mascotas m ON c.mascota_id = m.id
    JOIN duenos d ON c.dueno_id = d.id
    ORDER BY c.fecha, c.hora
  `);

  return rows;
};

// 🟨 Actualizar estado
export const actualizarEstadoDB = async (id) => {
  const [result] = await pool.query(
    'UPDATE citas SET estado = "atendida" WHERE id = ?',
    [id],
  );

  return result;
};

// 🟥 Eliminar cita
export const eliminarCitaDB = async (id) => {
  const [result] = await pool.query("DELETE FROM citas WHERE id = ?", [id]);

  return result;
};
