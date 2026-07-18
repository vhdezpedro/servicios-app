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

const connectDB = async () => {
  try {
    await db.getConnection();
    console.log("DB connected via MySQL");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  await db.end();
  console.log("DB disconnected");
};

export { db, connectDB, disconnectDB };
