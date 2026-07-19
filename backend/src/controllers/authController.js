import { db } from "../config/db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

const register = async (req, res) => {
  const { nombre, password, email } = req.body;

  //   Check is admin already exists
  const [existingAdmin] = await db.query(
    "SELECT * FROM admin WHERE email = ?",
    [email],
  );

  if (existingAdmin[0]) {
    return res.status(400).json({ error: "User already exists." });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create a new admin
  try {
    const [result] = await db.query(
      "INSERT INTO admin (username, password, email) VALUES (?, ?, ?)",
      [nombre, hashedPassword, email],
    );

    // Generate JWT Token
    const token = generateToken(result.insertId, res);

    res.status(201).json({
      status: "success",
      data: { id: result.insertId, nombre, email },
      token,
    });
  } catch (error) {
    console.error("Error creating admin: ", error.message);
    res.status(500).json({ error: "Error creating admin." });
  }
};

const adminRegistration = async (req, res) => {
  const { nombre, password, email, rol } = req.body;

  //   Check is admin already exists
  const [existingAdmin] = await db.query(
    "SELECT * FROM admin WHERE email = ?",
    [email],
  );

  if (existingAdmin[0]) {
    return res.status(400).json({ error: "User already exists." });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create a new admin
  try {
    const [result] = await db.query(
      "INSERT INTO admin (username, password, email, rol) VALUES (?, ?, ?, ?)",
      [nombre, hashedPassword, email, rol],
    );

    // Generate JWT Token
    const token = generateToken(result.insertId, res);

    res.status(201).json({
      status: "success",
      data: { id: result.insertId, nombre, email, rol },
      token,
    });
  } catch (error) {
    console.error("Error creating admin: ", error.message);
    res.status(500).json({ error: "Error creating admin." });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  //   Check is admin exists
  const [existingAdmin] = await db.query(
    "SELECT * FROM admin WHERE email = ?",
    [email],
  );

  if (!existingAdmin[0]) {
    return res.status(401).json({ error: "Invalid email." });
  }

  // Compare password
  const isPasswordValid = await bcrypt.compare(
    password,
    existingAdmin[0].password,
  );

  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid password." });
  }

  // Generate JWT Token
  const token = generateToken(existingAdmin[0].id, res);

  res.status(201).json({
    status: "success",
    data: {
      id: existingAdmin[0].id,
      nombre: existingAdmin[0].username,
      email: existingAdmin[0].email,
      rol: existingAdmin[0].rol,
    },
    token,
  });
};

const logout = (req, res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  res
    .status(200)
    .json({ status: "success", message: "Logged out successfully." });
};

export { register, login, logout, adminRegistration };
