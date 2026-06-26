require("dotenv").config();
const express = require("express");
const db = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const testDB = async () => {
  try {
    const connection = await db.getConnection();
    console.log("✅ Conexión a la base de datos exitosa");

    connection.release();
  } catch (error) {
    console.error("❌ Error conectando a la base de datos:", error.message);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send("Servidor funcionando...");
});

const startServer = async () => {
  await testDB();

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
};

startServer();
