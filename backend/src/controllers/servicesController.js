import db from "../config/db.js";

export const getServices = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM servicios");
    res.json({ ok: true, data: rows });
    console.log(rows);
  } catch (error) {
    console.error("Error al obtener los servicios: ", error.message);
    res
      .status(500)
      .json({ ok: false, message: "Error al obtener los servicios." });
  }
};

export const getServicesbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query("SELECT * FROM servicios WHERE id = ?", id);

    console.log("rows: ", rows);

    if (!rows[0]) {
      return res
        .status(404)
        .json({ ok: false, message: "Servicio no encontrado." });
    }

    res.json({ ok: true, data: rows });
    console.log(rows);
  } catch (error) {
    console.error("Error al obtener el servicios: ", error.message);
    res
      .status(500)
      .json({ ok: false, message: "Error al obtener el servicio." });
  }
};

export const createService = async (req, res) => {
  const { nombre, descripcion, precio } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO servicios (nombre, descripcion, precio) VALUES (?, ?, ?)",
      [nombre, descripcion, precio],
    );

    res.status(201).json({
      ok: true,
      message: "Servicio creado exitosamente.",
      data: { id: result.insertId, nombre, descripcion, precio },
    });
  } catch (error) {
    console.error("Error al crear el servicio: ", error.message);
    res.status(500).json({ ok: false, message: "Error al crear el servicio." });
  }
};
