import db from "../config/db.js";

export const getServices = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM servicios");
    console.log(rows);
    res.json({ ok: true, data: rows });
  } catch (error) {
    console.error("Error al obtener los servicios: ", error.message);
    res
      .status(500)
      .json({ ok: false, message: "Error al obtener los servicios." });
  }
};
