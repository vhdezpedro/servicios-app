import "dotenv/config";
import express from "express";
import cors from "cors";
import servicesRoutes from "./src/routes/servicesRoutes.js";
import usersRoutes from "./src/routes/usersRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Servidor funcionando...");
});

app.use("/", servicesRoutes);
app.use("/", usersRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
