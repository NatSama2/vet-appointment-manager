import {
  crearCitaDB,
  listarCitasDB,
  actualizarEstadoDB,
} from "../models/citas.model.js";

// 🟩 Crear cita
export const crearCita = async (req, res) => {
  try {
    const { mascota, especie, edad, dueno, telefono, fecha, hora } = req.body;

    // 🔎 Validación básica
    if (!mascota || !dueno || !fecha || !hora) {
      return res.status(400).json({
        msg: "Campos obligatorios faltantes",
      });
    }

    await crearCitaDB(req.body);

    res.status(201).json({
      msg: "Cita creada correctamente",
    });
  } catch (error) {
    // 🚫 Error de duplicado (UNIQUE)
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(400).json({
        msg: "Ya existe una cita en ese horario",
      });
    }

    console.error(error);

    res.status(500).json({
      msg: "Error interno al crear cita",
    });
  }
};

// 🟦 Listar citas
export const listarCitas = async (req, res) => {
  try {
    const data = await listarCitasDB();
    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      msg: "Error al obtener citas",
    });
  }
};

// 🟨 Actualizar estado
export const actualizarEstado = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        msg: "ID es requerido",
      });
    }

    await actualizarEstadoDB(id);

    res.json({
      msg: "Cita actualizada a atendida",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      msg: "Error al actualizar cita",
    });
  }
};
