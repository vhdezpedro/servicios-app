import db from "../config/db.js";

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query("SELECT * FROM usuarios WHERE id=?", id);
    res.json(rows[0]);
  } catch (error) {
    console.error("Error al obtener el usuario: ", error.message);
    res
      .status(500)
      .json({ ok: false, message: "Error al obtener el usuario." });
  }
};
