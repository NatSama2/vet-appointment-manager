import { pool } from "./db.js";

export const initDB = async () => {
  try {
    await pool.query(`CREATE DATABASE IF NOT EXISTS vetcitas`);
    await pool.query(`USE vetcitas`);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS duenos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        telefono VARCHAR(20)
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS mascotas (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        especie VARCHAR(50),
        edad INT
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS citas (
        id INT AUTO_INCREMENT PRIMARY KEY,
        mascota_id INT,
        dueno_id INT,
        fecha DATE NOT NULL,
        hora TIME NOT NULL,
        estado VARCHAR(20) DEFAULT 'pendiente',
        motivo TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

        -- 🔒 evita duplicados de horario
        UNIQUE (fecha, hora),

        FOREIGN KEY (mascota_id) REFERENCES mascotas(id),
        FOREIGN KEY (dueno_id) REFERENCES duenos(id)
      )
    `);

    console.log("✅ Base de datos y tablas listas");
  } catch (error) {
    console.error("❌ Error inicializando DB:", error);
  }
};
