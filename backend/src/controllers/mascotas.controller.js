import { listarMascotasDB } from "../models/mascotas.model.js";

export const listarMascotas = async (req, res) => {
  try {
    const data = await listarMascotasDB();
    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      msg: "Error al obtener mascotas",
    });
  }
};
