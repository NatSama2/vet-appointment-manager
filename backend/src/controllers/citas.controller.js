import {
  crearCitaDB,
  listarCitasDB,
  actualizarEstadoDB,
  eliminarCitaDB,
} from "../models/citas.model.js";

// 🟩 Crear cita
export const crearCita = async (req, res) => {
  try {
    const {
      mascota,
      especie,
      edad,
      dueno,
      telefono,
      fecha,
      hora,
      motivo = null, // 🆕 opcional
    } = req.body;

    // 🔎 Validación básica
    if (!mascota || !dueno || !fecha || !hora) {
      return res.status(400).json({
        msg: "Campos obligatorios faltantes",
      });
    }

    await crearCitaDB({
      mascota,
      especie,
      edad,
      dueno,
      telefono,
      fecha,
      hora,
      motivo,
    });

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

    const result = await actualizarEstadoDB(id);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        msg: "Cita no encontrada",
      });
    }

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

// 🟥 Eliminar cita
export const eliminarCita = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        msg: "ID es requerido",
      });
    }

    const result = await eliminarCitaDB(id);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        msg: "Cita no encontrada",
      });
    }

    res.json({
      msg: "Cita eliminada correctamente",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      msg: "Error al eliminar cita",
    });
  }
};
