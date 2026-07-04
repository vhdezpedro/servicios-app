import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const testConnection = async () => {
  try {
    const connection = await db.getConnection();
    console.log("Conectado a MySQL.");
    connection.release();
  } catch (error) {
    console.error("Error al conectar a la base de datos: ", error.message);
    throw error;
  }
};

db.on("error", (err) => {
  console.error("Error en la conexión a la base de datos: ", err.message);
});

export default db;
