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
    const [result] = await db.query("SELECT * FROM servicios WHERE id = ?", id);

    if (!result[0]) {
      return res
        .status(404)
        .json({ ok: false, message: "Servicio no encontrado." });
    }

    res.json({ ok: true, data: result });
    console.log(result);
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

export const updateService = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio } = req.body;

  try {
    const [result] = await db.query(
      "UPDATE servicios SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?",
      [nombre, descripcion, precio, id],
    );

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ ok: false, message: "Servicio no encontrado." });
    }

    res.json({
      ok: true,
      message: "Servicio actualizado exitosamente.",
      data: { id, nombre, descripcion, precio },
    });
  } catch (error) {
    console.error("Error al actualizar el servicio: ", error.message);
    res
      .status(500)
      .json({ ok: false, message: "Error al actualizar el servicio." });
  }
};

export const deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query("DELETE FROM servicios WHERE id = ?", id);

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ ok: false, message: "Servicio no encontrado." });
    }

    res.json({ ok: true, message: "Servicio eliminado exitosamente." });
  } catch (error) {
    console.error("Error al eliminar el servicio: ", error.message);
    res
      .status(500)
      .json({ ok: false, message: "Error al eliminar el servicio." });
  }
};
