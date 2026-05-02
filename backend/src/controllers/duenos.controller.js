import { listarDuenosDB } from "../models/duenos.model.js";

//Listar dueños
export const listarDuenos = async (req, res) => {
    try {
        const data = await listarDuenosDB();
        res.json(data);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            msg: "Error al obtener dueños"
        });
    };
};