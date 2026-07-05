import db from "../config/db.js";

export const getAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const [result] = await db.query(
      "SELECT username, rol FROM admin WHERE username=? AND password=?",
      [username, password],
    );

    if (!result[0]) {
      return res
        .status(401)
        .json({ ok: false, message: "Usuario o contraseña incorrectos." });
    }

    res.json({ ok: true, data: result[0] });
  } catch (error) {
    console.error("Error al obtener el administrador: ", error.message);
    res.status(500).json({ ok: false, message: "Error del servidor." });
  }
};
